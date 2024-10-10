import { sectionTwoNavigation } from "./headerItems";
import { useEffect, useState } from "react";

const HeaderSectionTwo = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  function handleResize() {
    setWidth(window.innerWidth);
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

  return (
    <header
      className={`flex justify-between items-center p-3 px-6 tb:px-10 gap-9 bg-white transition-transform duration-200 ease-in-out ${
        isVisible ? "sticky top-0 z-10 " : "-translate-y-full"
      }`}
    >
      <div className="basis-1/4 shrink-2">
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
        className={`${
          width < 866 ? "hidden" : "flex"
        } basis-1/2 justify-center`}
      >
        <ul className="flex gap-5 items-center font-hvm font-medium">
          <li className="border-b-2 border-transparent hover:border-black text-nowrap">
            New & Featured
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            Men
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            Women
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            Kids
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            Sale
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            Customise
          </li>
          <li className="border-b-2 border-transparent hover:border-black">
            SNKRS
          </li>
        </ul>
      </nav>

      <div className="flex basis-1/4 justify-end">
        <menu>
          <ul className="flex gap-1">
            {Object.keys(sectionTwoNavigation)
              .filter(
                (menu) =>
                  sectionTwoNavigation[menu].isCommon ||
                  (width > 960
                    ? !sectionTwoNavigation[menu].onSmall
                    : sectionTwoNavigation[menu].onSmall)
              )
              .map((menu) => (
                <a
                  className="hover:bg-slate-200 p-[0.4rem] rounded-full"
                  key={menu}
                  href={sectionTwoNavigation[menu].path}
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
                    <path d={sectionTwoNavigation[menu].svgPath} />
                  </svg>
                </a>
              ))}
          </ul>
        </menu>
      </div>
    </header>
  );
};

export default HeaderSectionTwo;
