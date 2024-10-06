import FormsContainer from "./FormsContainer";
import ImageSlider from "./ImageSlider";
import { AuthFormContextProvider } from "../../contexts/AuthFormContext";

const SlideContainer = () => {
  return (
    <AuthFormContextProvider>
      <main className="z-10 w-full rounded-2xl flex justify-center items-stretch overflow-hidden  tb:w-[80vw] lp:w-[65vw] bg-white shadow-lg border-2 border-slate-900/5 max-mid:opacity-80">
        <ImageSlider />
        <FormsContainer />
      </main>
    </AuthFormContextProvider>
  );
};

export default SlideContainer;
