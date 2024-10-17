import { CategoriesItemsList } from "./CategoriesItems";
import { useState } from "react";

const CategoriesSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex justify-center items-center px-12 pt-12">
      <div
        className={`flex gap-2 font-hvm font-normal text-lg overflow-hidden transition-all duration-300 ${
          isHovered ? "max-h-[20em]" : "max-h-[12em]"
        }`}
      >
        {Object.entries(CategoriesItemsList).map(
          ([category, subCategories]) => (
            <div
              key={category}
              className="flex flex-col gap-7"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="pl-16 font-medium">{category}</span>
              <ul className="flex flex-col gap-2.5">
                {Object.entries(subCategories).map(([subCategory, path]) => (
                  <li key={subCategory} className="pl-16">
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
