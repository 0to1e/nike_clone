import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import {
  IRegisterFormData,
  IRegisterFormRef,
} from "../../interfaces_types/Auth";
import { useForm } from "react-hook-form";

import { checkExistingUser, handleSignup } from "../../services/auth";
import { useBoolean } from "../../hooks/useBooleanHook";
import { validatePasswordMatch } from "../../utils/authValidationUtils";
import { AuthFormContext } from "../../contexts/AuthFormContext";

import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";

const RegisterForm = forwardRef<IRegisterFormRef>((props, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<IRegisterFormData>();

  const loginForm = useContext(AuthFormContext);

  const [registrationconflicts, setRegistrationConflicts] = useState({
    emailTaken: false,
    user_nameTaken: false,
  });

  const [passwordVisiblity, switchPasswordVisibility] = useBoolean(false);
  const [repeatPasswordVisiblity, switchRepeatPasswordVisibility] =
    useBoolean(false);

  async function handleRegisterSubmit(data: IRegisterFormData) {
    try {
      // Check for existing username/email
      const checkResult = await checkExistingUser(data.email, data.user_name);

      if (checkResult.emailTaken || checkResult.user_nameTaken) {
        setRegistrationConflicts(checkResult); // Update conflicts state
        return; // Stop form submission if conflicts found
      }

      // Proceed to sign up if no conflicts
      await handleSignup(data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  }
  function resetRegistrationForm() {
    reset();
    setRegistrationConflicts({ emailTaken: false, user_nameTaken: false });
  }

  useImperativeHandle(ref, () => ({ resetRegistrationForm }));

  return (
    <form
      onSubmit={handleSubmit(handleRegisterSubmit)}
      className={`w-full px-[5vw] flex flex-col justify-center ${
        loginForm?.loginForm ? "hidden" : "block"
      }`}
    >
      <p className="w-full font-bold text-2xl mb-14 text-center">
        Lets Sign you up
      </p>
      <div className="flex flex-col gap-3">
        <div>
          <div className="w-full flex flex-col gap-2 mob:flex-row mob:gap-2 mid:flex-col lp:flex-row">
            <input
              {...register("first_name", {
                required: "First name is required",
              })}
              className={`w-full rounded-full px-4 text-lg outline-none border border-slate-300 hover:ring-1 hover:ring-black hover:ring-offset-3 focus:ring-1 focus:ring-black transition-all duration-300  ${
                errors.first_name
                  ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                  : ""
              }`}
              type="text"
              placeholder="First Name"
              disabled={isSubmitting}
            />
            <input
              {...register("last_name", {
                required: "Last name is required",
              })}
              className={`w-full rounded-full p-2 px-4 text-lg outline-none border border-slate-300 hover:ring-1 hover:ring-black hover:ring-offset-3 focus:ring-1 focus:ring-black transition-all duration-200 ease-in-out ${
                errors.last_name
                  ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                  : ""
              }`}
              type="text"
              placeholder="Last Name"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col">
            {errors.first_name && (
              <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
                {errors.first_name.message}
              </span>
            )}
            {errors.last_name && (
              <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
                {errors.last_name.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <input
            {...register("user_name", {
              required: "User name is required",
              validate: (value: string) => {
                return value.includes("@") ? "Usernames can't contain @" : true;
              },
            })}
            className={`w-full rounded-full p-2 px-4 text-lg outline-none border border-slate-300 hover:ring-1 hover:ring-black hover:ring-offset-3 focus:ring-1 focus:ring-black transition-all duration-300 ${
              errors.user_name || registrationconflicts.user_nameTaken
                ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                : ""
            }`}
            type="text"
            placeholder="Username"
            disabled={isSubmitting}
          />
          {errors.user_name && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              {errors.user_name.message}
            </span>
          )}
          {registrationconflicts.user_nameTaken &&
            getValues("user_name") !== "" && (
              <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
                Username already taken
              </span>
            )}
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid Email format",
              },
            })}
            className={`w-full rounded-full p-2 px-4 text-lg outline-none border border-slate-300 hover:ring-1 hover:ring-black hover:ring-offset-3 focus:ring-1 focus:ring-black transition-all duration-300 ${
              errors.email || registrationconflicts.emailTaken
                ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                : ""
            }`}
            type="text"
            placeholder="Email address"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              {errors.email.message}
            </span>
          )}
          {registrationconflicts.emailTaken && getValues("email") !== "" && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              Username already taken
            </span>
          )}
        </div>
        <div>
          <div
            className={`w-full overflow-hidden flex justify-center items-center px-1 rounded-full transition-all duration-300 hover:ring-1 focus:ring-1 focus:ring-black hover:ring-black focus:ring-offset-2 hover:ring-offset-2 border border-slate-300 hover:border-0 ${
              errors.password
                ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                : ""
            }`}
          >
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[^\s]+$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and no spaces.",
                },
              })}
              className="outline-none border-0 w-full p-2 px-3 text-lg"
              type={passwordVisiblity ? "text" : "password"}
              placeholder="Enter Password"
              disabled={isSubmitting}
            />
            <button
              className="flex justify-center items-center pr-3"
              type="button"
              onClick={switchPasswordVisibility}
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
        </div>
        <div>
          <div
            className={`w-full overflow-hidden flex justify-center items-center px-1 rounded-full transition-all duration-300 hover:ring-1 focus:ring-1 focus:ring-black hover:ring-black focus:ring-offset-2 hover:ring-offset-2 border border-slate-300 hover:border-0 ${
              errors.rpassword
                ? "ring-1 ring-red-600 focus:ring-red-600 hover:ring-red-600"
                : ""
            }`}
          >
            <input
              className="outline-none border-0 w-full p-2 px-3 text-lg"
              type={repeatPasswordVisiblity ? "text" : "password"}
              placeholder="Repeat Password"
              disabled={isSubmitting}
              {...register("rpassword", {
                required: "Please re-enter the password",
                validate: validatePasswordMatch(() => getValues("password")),
              })}
            />
            <button
              className="flex justify-center items-center pr-3"
              type="button"
              onClick={switchRepeatPasswordVisibility}
            >
              {!repeatPasswordVisiblity ? (
                <VisibilitySharpIcon
                  sx={{
                    color: `${
                      errors.rpassword && errors.password ? "#dc2626" : "#000"
                    }`,
                  }}
                />
              ) : (
                <VisibilityOffSharpIcon
                  sx={{
                    color: `${
                      errors.rpassword && errors.password ? "#dc2626" : "#000"
                    }`,
                  }}
                />
              )}
            </button>
          </div>
          {errors.rpassword && (
            <span className="transition-transform duration-300 ease-in-out inline-block px-4 text-sm text-red-600">
              {errors.rpassword.message}
            </span>
          )}
        </div>
      </div>
      <button
        className="mx-auto p-2 px-4 mt-5 rounded-full outline-none bg-black  hover:ring-2 hover:ring-black hover:ring-offset-2 text-white text-lg font-bold"
        type="submit"
      >
        Register
      </button>
    </form>
  );
});

export default RegisterForm;
