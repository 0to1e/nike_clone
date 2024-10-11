import { classicItems } from "./classicItems";
const ClassicSection = () => {
  return (
    <section className="mx-auto font-hvm flex flex-col gap-6">
      <h2 className="w-padded mx-auto text-[1.3rem] font-normal">
        Classics Spotlight
      </h2>
      <div className="flex gap-2.5 overflow-hidden overflow-x-auto scroll-smooth">
        {Object.keys(classicItems).map((item) => (
          <a
            href={classicItems[item].path}
            key={classicItems[item].image}
            className="flex flex-col gap-7 min-w-[80vw] mob:min-w-[60vw] mid:min-w-[30vw] lp:min-w-[21vw]"
          >
            <img src={classicItems[item].image} width={600} height={600} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ClassicSection;
