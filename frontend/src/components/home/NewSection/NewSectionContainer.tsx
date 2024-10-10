import { newItems } from "../NewSection/NewSectionData";
import { FeaturedItemsList } from "../../../interfaces_types/Home/featured";
import NavButtons from "./NavButtons";

const NewSection: React.FC<FeaturedItemsList> = () => {
  return (
    <section className=" mt-32 w-padded mx-auto font-hvm flex flex-col gap-2">
      <NavButtons />
      <div className="flex gap-2.5 overflow-hidden overflow-x-auto">
        {Object.keys(newItems).map((item) => (
          <a
            href={newItems[item].path}
            key={newItems[item].image}
            className="flex flex-col gap-7 basis-1/3 min-w-[calc(18rem+20vw)] lp:min-w-[400px]"
          >
            <img
              src={newItems[item].image}
              alt={newItems[item].title}
              width={867}
              height={1084}
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-[1.1rem] font-medium">
                {newItems[item].title}
              </span>
              <span className="text-[0.92rem]">
                {newItems[item].price}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewSection;
