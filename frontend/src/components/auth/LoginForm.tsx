import { useForm } from "react-hook-form";
import { forwardRef, useImperativeHandle, useState, useContext } from "react";

import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";

import { handleLogin } from "../../services/auth";
import { useBoolean } from "../../hooks/useBooleanHook";
import { validateEmailFormat } from "../../utils/authValidationUtils";
import { ILoginFormData, ILoginFormRef } from "../../interfaces_types/Auth";
import { AuthFormContext } from "../../contexts/AuthFormContext";

const LoginForm = forwardRef<ILoginFormRef>((props,ref) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<ILoginFormData>();

  const loginForm = useContext(AuthFormContext);

  const [loginConflicts, setLoginConflicts] = useState({
    incorrectPassword: false,
    userNotFound: false,
  });

  const [passwordVisiblity, switchPasswordVisiblity] = useBoolean(false);

  async function handleLoginSubmit(data: ILoginFormData) {
    try {
      const response = await handleLogin(data);

      if (response.incorrectPassword) {
        setLoginConflicts({ incorrectPassword: true, userNotFound: false });
        throw new Error("Incorrect Password");
      }
      if (response.userNotFound) {
        setLoginConflicts({ incorrectPassword: false, userNotFound: true });
        throw new Error("Username/Email not registered");
      }
      resetLoginForm();
    } catch (error) {
      console.error(error);
    }
  }

  function resetLoginForm() {
    reset();
    setLoginConflicts({ incorrectPassword: false, userNotFound: false });
  }

  useImperativeHandle(ref, () => ({
    resetLoginForm,
  }));

  return (
    <form
      onSubmit={handleSubmit(handleLoginSubmit)}
      className={`w-full px-[5vw] flex flex-col ${
        loginForm ? "hidden" : "block"
      }`}
    >
      <p className="w-full font-bold text-2xl mb-14 text-center transition-all duration-300">
        Welcome Back
      </p>
      <div className="flex flex-col gap-7">
        <div>
          <input
            {...register("user_name", {
              required: "Username/ Email is required",
              validate: validateEmailFormat,
            })}
            className={`w-full rounded-full p-2 px-4 text-lg outline-none border border-slate-300 hover:ring-1 hover:ring-black hover:ring-offset-3 focus:ring-1 focus:ring-black transition-all duration-200 ease-in-out ${
              errors.user_name || loginConflicts.userNotFound
                ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                : ""
            }`}
            type="text"
            placeholder="Username/email"
            disabled={isSubmitting}
          />
          {errors.user_name && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              {errors.user_name.message}
            </span>
          )}
          {loginConflicts.userNotFound && getValues("user_name") !== "" && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              Username/Email not registered
            </span>
          )}
        </div>
        <div>
          <div
            className={`w-full overflow-hidden flex justify-center items-center px-1 rounded-full transition-all duration-300 hover:ring-1 focus:ring-1 focus:ring-black hover:ring-black focus:ring-offset-2 hover:ring-offset-2 border border-slate-300 hover:border-0 ${
              errors.password || loginConflicts.incorrectPassword
                ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                : ""
            }`}
          >
            <input
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-full p-[calc(0.1em+0.35vw)] px-4 text-lg outline-none bg-transparent "
              type={passwordVisiblity ? "text" : "password"}
              placeholder="Password"
              disabled={isSubmitting}
            />
            <button
              className="flex justify-center items-center pr-3"
              type="button"
              onClick={switchPasswordVisiblity}
            >
              {!passwordVisiblity ? (
                <VisibilitySharpIcon
                  sx={{
                    color: `${errors.password ? "#dc2626" : "#000"}`,
                  }}
                />
              ) : (
                <VisibilityOffSharpIcon
                  sx={{
                    color: `${errors.password ? "#dc2626" : "#000"}`,
                  }}
                />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
          {loginConflicts.incorrectPassword && getValues("password") !== "" && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              Incorrect Password
            </span>
          )}
        </div>
      </div>
      <button
        className="mx-auto p-2 px-4 mt-5 rounded-full outline-none bg-black  hover:ring-2 hover:ring-black hover:ring-offset-2 text-white text-lg font-bold"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
});

export default LoginForm;
