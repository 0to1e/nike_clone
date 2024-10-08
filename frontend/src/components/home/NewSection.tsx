import { featuredItems } from "../home/Featured/featuredItems";
import { FeaturedItemsList } from "../../interfaces_types/Home/featured";
const NewSection: React.FC<FeaturedItemsList> = () => {
  return (
    <section className=" mt-32 w-padded mx-auto font-hvm flex flex-col gap-2">
      <div className=" flex justify-between">
        <span className="text-[1.3rem] mb-5 font-normal">
          All New, Perfect For You
        </span>
        <menu className="flex gap-4 items-center">
          <a className="hover:text-stone-400" href="#">
            Shop
          </a>
          <div className="flex gap-2">
            <button className="bg-[#E5E5E5] hover:bg-[#CACACB] p-3 px-5 flex justify-center items-center rounded-full text-2xl">
              &#8249;
            </button>
            <button className="bg-[#E5E5E5] hover:bg-[#CACACB] p-3 px-5 flex justify-center items-center rounded-full text-2xl">
              &#8250;
            </button>
          </div>
        </menu>
      </div>{" "}
      <div className="flex gap-2.5 overflow-hidden overflow-x-auto">
        {Object.keys(featuredItems).map((item) => (
          <a
            href={featuredItems[item].path}
            key={featuredItems[item].image}
            className="flex flex-col gap-7 basis-1/3 min-w-[calc(18rem+20vw)] lp:min-w-[400px]"
          >
            <img
              src={featuredItems[item].image}
              alt={featuredItems[item].title}
              width={867}
              height={1084}
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-[1.1rem] font-medium">
                {featuredItems[item].title}
              </span>
              <span className="text-[0.92rem]">
                {featuredItems[item].description}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewSection;
