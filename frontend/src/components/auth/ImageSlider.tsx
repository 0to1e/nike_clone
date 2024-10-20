import { useContext } from "react";
import { AuthFormContext } from "../../contexts/AuthFormContext";

const ImageSlider = () => {
  const formContext = useContext(AuthFormContext);

  if (!formContext) {
    return null;
  }

  const { loginForm } = formContext;

  return (
    <div
      className={`hidden mid:flex relative overflow-hidden z-10 basis-1/2 justify-center items-center transition-transform duration-300 ease-in-out ${
        loginForm ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className={`absolute inset-0 bg-cover transition-opacity duration-200 delay-100 ease-in-out ${
          loginForm ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url(./src/assets/authPage/login.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "block",
        }}
      />
      <div
        className={`absolute inset-0 bg-cover transition-opacity duration-200 delay-100 ease-in-out ${
          loginForm ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url(./src/assets/authPage/register.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
};

export default ImageSlider;
