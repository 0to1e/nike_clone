import { useEffect } from "react";
import { useBoolean } from "../../../hooks/useBooleanHook";

const SalesBanner = () => {
  const [banner, toggleBanner] = useBoolean(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleBanner();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [toggleBanner]);
  return (
    <div className="bg-[#F5F5F5] flex justify-center items-center min-h-[10vh] overflow-hidden">
      <section
        className={`transition-transform duration-500 ease-in-out w-[98vw] flex flex-col gap-1 items-center ${
          banner ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <span className="text-md">New Styles On Sale: Up To 40% Off</span>
        <a className="text-xs cursor-pointer underline font-medium">
          Shop all our New Markdowns
        </a>
      </section>
      <section
        className={`transition-transform duration-500 ease-in-out absolute w-[98vw] min-h-fit flex flex-col gap-2 items-center ${
          banner ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <span className="text-md font-hvm font-normal">
            Move, Shop, Customize and Celebrate With Us
          </span>
          <span className="text-xs">
            No matter what you feel like doing today, it's better as a member
          </span>
        </div>
        <a className="text-xs cursor-pointer underline font-medium">Join Us</a>
      </section>
    </div>
  );
};

export default SalesBanner;
