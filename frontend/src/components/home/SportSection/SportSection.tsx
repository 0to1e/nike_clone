import { sportItems } from "./sportSectionItems";
import { SportItemsList } from "../../../interfaces_types/Home/sportSection";

const NewSection: React.FC<SportItemsList> = () => {
  return (
    <section className=" my-32 w-padded mx-auto font-hvm flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[1.3rem] font-normal">Shop by sport</h2>
        <menu className="flex gap-3 items-center">
          <button className="bg-[#F5F5F5] p-2 rounded-full hover:bg-stone-300 transition-colors duration-200">
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
                d="M15.525 18.966L8.558 12l6.967-6.967"
              ></path>
            </svg>
          </button>
          <button className="bg-[#F5F5F5] p-2 rounded-full hover:bg-stone-300 transition-colors duration-200">
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
                d="M8.474 18.966L15.44 12 8.474 5.033"
              ></path>
            </svg>
          </button>
        </menu>
      </div>

      <div className="flex gap-2.5 overflow-hidden overflow-x-auto scroll-smooth">
        {Object.keys(sportItems).map((item) => (
          <a
            href={sportItems[item].path}
            key={sportItems[item].image}
            className="flex flex-col gap-7 basis-1/3 min-w-[80vw] mid:min-w-[400px]"
          >
            <div
              className="bg-cover bg-center h-[54vw] mob:h-[60vw] mid:max-h-[45vw] tb:max-h-[45vh] flex items-end"
              style={{
                backgroundImage: `url(${sportItems[item].image})`,
              }}
            >
              <button className=" bg-white p-1.5 px-3 rounded-full m-8 font-medium text-sm">
                {item}
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewSection;
