//frontend/src/components/common/Header/HeaderSectionTwo.tsx

import { capitalize } from "../../../utils/functions/capitalizeSentence";
import { sectionTwoMenu, SectionTwoHeaderItems } from "./headerItems";
import { useEffect, useState, useContext } from "react";
import { ResponsiveHeaderContext } from "../../../contexts/ResponsiveHeaderContext";

const HeaderSectionTwo = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [onNavigationHover, setOnNavigationHover] = useState("");

  function handleResize() {
    setWidth(window.innerWidth);
  }

  function hideHeader(e) {
    if (e.relatedTarget.tagName === "SECTION") setOnNavigationHover("");
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const responsiveHeaderContext = useContext(ResponsiveHeaderContext);
  if (!responsiveHeaderContext) return null;
  const { isResponsiveHeaderActive, toggleResponsiveHeader } =
    responsiveHeaderContext;
  return (
    <>
      <header
        className={`transition-transform duration-100 ease-in-out top-0 z-10 ${
          isResponsiveHeaderActive ? "" : "sticky"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="bg-white flex flex-col relative ">
          <section className="flex justify-between h-full px-6 tb:px-10 gap-9 min-h-[3.75rem]">
            <div className="flex items-center basis-1/4 shrink-2 bg-slate-400">
              <svg
                className="w-[3.55rem] h-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="1000"
                height="356.39"
                viewBox="135.5 361.38 1000 356.39"
              >
                <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
              </svg>
            </div>
            <nav
              className={` ${
                width <= 865 ? "hidden" : "flex"
              } basis-1/2 justify-center`}
            >
              <ul
                className="flex items-center font-hvm space-x-5 font-medium"
                onMouseLeave={() => {
                  setOnNavigationHover("");
                }}
              >
                {Object.entries(SectionTwoHeaderItems).map(([navItem]) => (
                  <li
                    key={navItem}
                    className="flex items-center h-full"
                    id={navItem}
                    onMouseEnter={async (event) => {
                      if (
                        (event.currentTarget.tagName === "LI" ||
                          event.currentTarget.tagName === "SPAN") &&
                        event.currentTarget.id != onNavigationHover
                      ) {
                        setOnNavigationHover("");
                        setTimeout(() => {
                          setOnNavigationHover(navItem);
                        }, 130);
                      }
                    }}
                  >
                    <a href="#">
                      <span className="border-b-2 pb-1 border-transparent hover:border-black text-nowrap">
                        {capitalize(`${navItem}`)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <menu className="flex basis-1/4 justify-end items-center">
              <ul className="flex gap-2.5 items-center">
                {Object.keys(sectionTwoMenu)
                  .filter(
                    (menu) =>
                      sectionTwoMenu[menu].isCommon ||
                      (width > 865
                        ? !sectionTwoMenu[menu].onSmall
                        : sectionTwoMenu[menu].onSmall)
                  )
                  .map((menu) => {
                    if (width >= 980 && menu === "Search") {
                      return (
                        <li key={menu} className="flex items-center">
                          <div className="bg-[#F5F5F5] min-h-full inline-flex items-center rounded-full gap-1">
                            <a
                              className="bg-[#F5F5F5] rounded-full p-[0.4rem]"
                              href={sectionTwoMenu[menu].path}
                            >
                              <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-colors duration-100 ease-in-out"
                              >
                                <title>{menu}</title>
                                <path d={sectionTwoMenu[menu].svgPath} />
                              </svg>
                            </a>
                            <form action="">
                              <input
                                className="w-[9rem] bg-[#F5F5F5] rounded-full font-hvm placeholder-[#707072] font-medium outline-none"
                                type="text"
                                name="Search"
                                id="serach"
                                placeholder="Search"
                              />
                            </form>
                          </div>
                        </li>
                      );
                    } else if (menu === "Options") {
                      return (
                        <li key={menu} className="inline-flex">
                          <a
                            className="hover:bg-[#E5E5E5] p-[0.4rem] rounded-full"
                            onClick={() => {
                              toggleResponsiveHeader(true);
                            }}
                          >
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="transition-colors duration-100 ease-in-out"
                            >
                              <title>{menu}</title>
                              <path d={sectionTwoMenu[menu].svgPath} />
                            </svg>
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={menu} className="inline-flex">
                        <a
                          className="hover:bg-[#E5E5E5] p-[0.4rem] rounded-full"
                          href={sectionTwoMenu[menu].path}
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-colors duration-100 ease-in-out"
                          >
                            <title>{menu}</title>
                            <path d={sectionTwoMenu[menu].svgPath} />
                          </svg>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </menu>
          </section>
          <section
            className={`absolute min-h-screen w-full top-[3.75rem] left-0 backdrop:opacity-40 transition-colors backdrop:brightness-50 bg-black bg-opacity-50 ${
              onNavigationHover &&
              onNavigationHover !== "customize" &&
              onNavigationHover !== "SNKRS"
                ? "visible"
                : "invisible"
            }`}
          >
            <div
              className={`absolute transition-transform duration-300 ease-in-out bg-white w-full p-10   ${
                onNavigationHover &&
                onNavigationHover !== "customize" &&
                onNavigationHover !== "SNKRS"
                  ? "translate-y-0 visible"
                  : "-translate-y-[300%] invisible"
              }`}
              onMouseEnter={() => setOnNavigationHover(onNavigationHover)}
              onMouseLeave={hideHeader}
            >
              <nav className="flex flex-col justify-center items-center text-hvm font-semibold text-sm min-h-full">
                {Object.entries(SectionTwoHeaderItems).map(
                  ([category, subCategoriesList]) => {
                    return (
                      <div
                        key={category}
                        className={`grid grid-cols-5 gap-4 w-full justify-center items-start px-[15vw] ${
                          category == onNavigationHover ? "block" : "hidden"
                        }`}
                      >
                        {Object.entries(subCategoriesList).map(
                          ([subCategoryTitle, subcategory]) => (
                            <div
                              key={subCategoryTitle}
                              className="flex flex-col gap-3"
                            >
                              <span>{capitalize(subCategoryTitle)}</span>
                              <div className="flex flex-col leading-6">
                                {Object.entries(subcategory).map(
                                  ([name, path]) => (
                                    <a
                                      key={name}
                                      href={path as string}
                                      className="text-[#7D7D7F]"
                                    >
                                      {capitalize(name)}
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    );
                  }
                )}
              </nav>
            </div>
          </section>
        </div>
      </header>
      <header
        className={`fixed min-h-screen w-full bg-black bg-opacity-50 backdrop:opacity-50 top-0 z-10 ${
          isResponsiveHeaderActive ? "block" : "hidden"
        }`}
      >
        <section
          className={`absolute right-0 bg-white py-5 pb-32 w-[20rem] max-h-screen overflow-hidden overflow-y-auto ${
            isResponsiveHeaderActive ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col">
            <menu className="flex justify-end px-4 ">
              <a
                onClick={() => { toggleResponsiveHeader(false) }}
                className="hover:bg-[#E5E5E5] p-[0.4rem] rounded-full"
              >
                <svg
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
                    strokeWidth="1.5"
                    d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"
                  ></path>
                </svg>
              </a>
            </menu>
            <div className="flex flex-col gap-16 p-5 px-8 font-hvm">
              <ul className="flex flex-col gap-3">
                <span className="text-2xl font-medium">New & Featured</span>
                <span className="text-2xl font-medium">Men</span>
                <span className="text-2xl font-medium">Women</span>
                <span className="text-2xl font-medium">Kids</span>
                <span className="text-2xl font-medium">Sale</span>
                <span className="text-2xl font-medium">SNKRS</span>
              </ul>
              <a
                className="text-lg font-medium flex items-center gap-1 -translate-x-2"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="32px"
                  height="32px"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Jordan</span>
              </a>
              <div className="pr-3 flex flex-col">
                <span className="text-xl text-[#707072] tracking-tighter">
                  Become a Nike Member for the best products, inspiration and
                  stories in sport.{" "}
                  <a className="text-black font-medium" href="">
                    Learn More
                  </a>
                </span>
                <menu className="flex gap-2.5 py-5">
                  <button className="p-2 bg-black rounded-full text-white px-4 text-md font-medium">
                    Join Us
                  </button>
                  <button className="p-2 bg-white rounded-full text-black border border-[#707072] px-4 text-md font-medium">
                    Sign In
                  </button>
                </menu>
              </div>
              <nav className="font-hvm text-lg">
                <ul className="flex flex-col gap-2">
                  <a className="flex gap-2.5 items-center">
                    <svg
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
                        d="M11.99 18v-1.5M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15m9.75-3c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z"
                      ></path>
                    </svg>
                    <span>Help</span>
                  </a>
                  <a className="flex gap-2.5 items-center">
                    <svg
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
                        strokeWidth="1.5"
                        d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                      ></path>
                    </svg>
                    <span>Bag</span>
                  </a>
                  <a className="flex gap-2.5 items-center">
                    <svg
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
                        d="M12 13.5v-7c0-1.74 1.01-2.75 2.25-2.75h4.39l1.61 6m0 0H3.75m16.5 0v10.5H3.75V9.75m0 0l1.61-6h5.14"
                      ></path>
                    </svg>
                    <span>Orders</span>
                  </a>
                  <a className="flex gap-2.5 items-center">
                    <svg
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
                        d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25m4.5 13.25v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"
                      ></path>
                    </svg>
                    <span>Find a Store</span>
                  </a>
                </ul>
              </nav>
            </div>
          </nav>
        </section>
      </header>
    </>
  );
};

export default HeaderSectionTwo;
