import { FooterItemsList } from "./footerItems";
import { capitalize } from "../../../utils/functions/capitalizeSentence";

const Footer = () => {
  return (
    <footer className={"w-full bg-white flex flex-col gap-12 p-12 py-20 pb-24 z-10"}>
      <div className=" bg-[#F1F1F1] p-[0.05rem]"></div>
      <div className="flex justify-between font-hvm text-sm font-medium">
        <section className="flex flex-col gap-20">
          <div className="flex justify-between gap-40">
            {Object.entries(FooterItemsList).map(([section, sectionValues]) => (
              <div key={section} className="flex flex-col gap-6">
                <span>{section}</span>
                <ul className="flex flex-col gap-4">
                  {Object.entries(sectionValues).map(([sectionValue, path]) => (
                    <li key={sectionValue}>
                      <a href={path}>
                        <span className="text-[#707072] hover:text-black transition-colors duration-50 ease-in">
                          {capitalize(sectionValue)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex gap-8 text-[#7C7C7C]">
            <span className="text-black transition-colors duration-50 ease-in">
              © 2024 Nike, Inc. All rights reserved
            </span>
            <span className="hover:text-black transition-colors duration-50 ease-in">
              Guides
            </span>
            <a
              className="hover:text-black transition-colors duration-50 ease-in"
              href="#"
            >
              Terms of Sale
            </a>
            <a
              className="hover:text-black transition-colors duration-50 ease-in"
              href="#"
            >
              Terms of Use
            </a>
            <a
              className="hover:text-black transition-colors duration-50 ease-in"
              href="#"
            >
              Nike Privacy Policy
            </a>
          </div>
        </section>
        <div>
          <a href="#">
            {" "}
            <span className="flex items-center gap-1 text-[#7A7A7C]">
              <svg
                className="w-[1rem]"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
                ></path>
              </svg>
              Nepal
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
