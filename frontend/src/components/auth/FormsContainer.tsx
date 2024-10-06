import { useRef, useContext } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { AuthFormContext } from "../../contexts/AuthFormContext";
import {
  ILoginFormRef,
  IRegisterFormRef,
} from "../../interfaces_types/Auth";

const FormsContainer = () => {
  const formContext = useContext(AuthFormContext);
  const loginRef = useRef<ILoginFormRef>(null);
  const registerRef = useRef<IRegisterFormRef>(null);

  const loginForm = formContext?.loginForm;

  const resetLoginForm = () => {
    if (loginRef.current) {
      loginRef.current.resetLoginForm();
    }
  };

  const resetRegistrationForm = () => {
    if (registerRef.current) {
      registerRef.current.resetRegistrationForm();
    }
  };

  if (!formContext) return null;

  return (
    <div
      className={`min-h-[70vh] w-full mid:basis-1/2 flex flex-col justify-center py-6 ${
        loginForm ? "-translate-x-full max-mid:translate-x-0" : "translate-x-0"
      } bg-white`}
    >
      <LoginForm ref={loginRef}  />
      <RegisterForm ref={registerRef} />

      <div className="mx-auto flex mt-12 gap-2 justify-center items-center">
        <span className="m-auto">
          {loginForm ? "Already have an account?" : "New here?"}
        </span>
        <button
          className={`p-1 px-2 rounded-full outline-none bg-black hover:ring-2 hover:ring-black hover:ring-offset-2 text-white text-sm ${
            !loginForm ? "hidden" : "block"
          } transition-transform delay-200 ease-in-out`}
          onClick={() => {
            formContext.switchForms();
            resetRegistrationForm();
          }}
        >
          Login
        </button>
        <button
          className={`p-1 px-2 rounded-full outline-none bg-black hover:ring-2 hover:ring-black hover:ring-offset-2 text-white text-sm ${
            !loginForm ? "block" : "hidden"
          } transition-transform delay-200 ease-in-out`}
          onClick={() => {
            formContext.switchForms();
            resetLoginForm();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default FormsContainer;
