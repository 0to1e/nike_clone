import { membershipItems } from "./membershipItems";
import { MembershipItemsList } from "../../../interfaces_types/Home/membershipSection";

const MemberBenifitSection: React.FC<MembershipItemsList> = () => {
  return (
    <section className="px-5 mx-auto font-hvm flex flex-col gap-5 w-padded">
      <div className="flex items-center justify-between">
        <h2 className="text-[1.3rem] font-normal">Member Benefits</h2>
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
        {Object.keys(membershipItems).map((item) => (
          <a
            href={membershipItems[item].path}
            key={membershipItems[item].image}
            className="flex flex-col"
          >
            <div
              className="bg-cover bg-center flex flex-col justify-end text-sm w-[85vw] mob:w-[70vw] tb:w-[43.5vw] lp:w-[29.5vw] "
              style={{
                backgroundImage: `url(${membershipItems[item].image})`,
                aspectRatio: 4 / 5,
              }}
            >
              <div className="flex flex-col m-8 gap-[0.65rem]">
                <span className="text-white text-md font-medium">{item}</span>
                <span className="text-white text-lg font-medium">
                  {membershipItems[item].title}
                </span>{" "}
                <button className=" bg-white p-1.5 px-3 rounded-full font-medium w-fit">
                  {membershipItems[item].action}
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MemberBenifitSection;
