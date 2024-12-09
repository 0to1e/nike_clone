import { capitalize } from "../../../../../utils/functions/capitalizeSentence";
import { SectionTwoHeaderItems, sectionTwoMenu } from "../../headerItems";

export const StaticHeaderSection: React.FC<{
  width: number;
  onNavigationHover: string;
  setOnNavigationHover: React.Dispatch<React.SetStateAction<string>>;
  toggleResponsiveHeader: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  width,
  toggleResponsiveHeader,
  onNavigationHover,
  setOnNavigationHover,
}) => {
  return (
    <section className="flex justify-between h-full px-6 tb:px-10 gap-9 min-h-[3.75rem]">
      <LogoDiv />
      <LargeNavArea
        onNavigationHover={onNavigationHover}
        width={width}
        setOnNavigationHover={setOnNavigationHover}
      />
      <MenuArea width={width} toggleResponsiveMenu={toggleResponsiveHeader} />
    </section>
  );
};

const LogoDiv = () => {
  return (
    <div className="flex items-center basis-1/4 shrink-2">
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
  );
};

const LargeNavArea: React.FC<{
  width: number;
  onNavigationHover: string;
  setOnNavigationHover: React.Dispatch<React.SetStateAction<string>>;
}> = ({ width, onNavigationHover, setOnNavigationHover }) => {
  return (
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
  );
};

const MenuArea: React.FC<{
  width: number;
  toggleResponsiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ width, toggleResponsiveMenu }) => {
  return (
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
                      toggleResponsiveMenu(true);
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
  );
};
