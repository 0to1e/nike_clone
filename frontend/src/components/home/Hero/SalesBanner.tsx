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
    <>
      <section className="bg-[#F5F5F5] flex overflow-hidden p-1">
        <div
          className={`flex flex-col flex-shrink-0 w-full justify-center items-center transition-transform duration-500 ease-in-out ${
            banner ? "-translate-x-[100%]" : "translate-x-0"
          }`}
        >
          <span className="text-md">New Styles On Sale: Up To 40% Off</span>
          <a className="text-xs cursor-pointer underline font-medium">
            Shop all our New Markdowns
          </a>
        </div>
        <div
          className={`flex flex-col flex-shrink-0 w-full justify-center items-center transition-transform duration-500 ease-in-out ${
            banner ? "-translate-x-[100%]" : "translate-x-0"
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
          <a className="text-xs cursor-pointer underline font-medium">
            Join Us
          </a>
        </div>
      </section>
    </>
  );
};

export default SalesBanner;
