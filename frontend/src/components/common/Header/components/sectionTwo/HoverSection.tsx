import React from "react";
import { capitalize } from "../../../../../utils/functions/capitalizeSentence";
import { SectionTwoHeaderItems } from "../../headerItems";

export const HoverSection: React.FC<{
  onNavigationHover: string;
  setOnNavigationHover: React.Dispatch<React.SetStateAction<string>>;
}> = ({ onNavigationHover, setOnNavigationHover }) => {
  
    function hideHeader(e) {
    if (e.relatedTarget.tagName === "SECTION") setOnNavigationHover("");
  }

  return (
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
                  {Object.entries(subCategoriesList.categories).map(
                    ([subCategoryTitle, subcategory]) => (
                      <div
                        key={subCategoryTitle}
                        className="flex flex-col gap-3"
                      >
                        <a href={subCategoriesList.path}>
                          {capitalize(subCategoryTitle)}
                        </a>
                        <div className="flex flex-col leading-6">
                          {Object.entries(subcategory).map(([name, path]) => (
                            <a
                              key={name}
                              href={path as string}
                              className="text-[#7D7D7F]"
                            >
                              {capitalize(name)}
                            </a>
                          ))}
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
  );
};
