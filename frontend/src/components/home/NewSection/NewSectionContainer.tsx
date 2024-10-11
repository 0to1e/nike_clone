import { newItems } from "../NewSection/NewSectionData";
import { FeaturedItemsList } from "../../../interfaces_types/Home/featuredSection";
import NavButtons from "../../common/NavButtons";

const NewSection: React.FC<FeaturedItemsList> = () => {
  return (
    <section className=" my-32 w-padded mx-auto font-hvm flex flex-col">
      <NavButtons />
      <div className="flex gap-2.5 overflow-hidden overflow-x-auto scroll-smooth">
        {Object.keys(newItems).map((item) => (
          <a
            href={newItems[item].path}
            key={newItems[item].image}
            className="flex flex-col gap-7 min-w-[80vw] mob:min-w-[60vw] mid:min-w-[40vw] lp:min-w-[30vw]"
          >
            <img
              src={newItems[item].image}
              alt={newItems[item].title}
              width={868}
              height={868}
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-[1rem] font-medium">
                {newItems[item].title}
              </span>
              <span className="text-[1rem] font-normal text-slate-500">
                {newItems[item].category}
              </span>
              <span className="text-[1rem] font-medium">
                {`MRP :Rs. ${Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                  .format(newItems[item].price)
                  .replace(/,/g, " ")}`}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewSection;
