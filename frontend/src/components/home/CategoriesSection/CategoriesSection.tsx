import { CategoriesItemsList } from "./CategoriesItems";
import { useState } from "react";

const CategoriesSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="flex justify-center items-center p-12">
      <div
        className={`${
          isExpanded ? "" : "max-h-[20vh]"
        } flex gap-16 font-hvm font-medium text-lg overflow-hidden transition-all duration-300 `}
      >
        {Object.entries(CategoriesItemsList).map(
          ([category, subCategories]) => (
            <div
              key={category}
              className="flex flex-col gap-7 "
              onMouseEnter={() => {
                setIsExpanded(true);
                console.log(isExpanded);
              }}
              onMouseLeave={() => {
                setIsExpanded(false);
                console.log(isExpanded);
              }}
            >
              <span>{category}</span>
              <ul className="flex flex-col gap-2.5">
                {Object.entries(subCategories).map(([subCategory, path]) => (
                  <li key={subCategory}>
                    <a href={path}>
                      <span className="text-[#7C7C7C] hover:text-black transition-colors duration-50 ease-in">
                        {subCategory}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;