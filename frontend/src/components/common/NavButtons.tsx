const NavButtons = () => {
  return (
    <div className="w-[99.3%] flex items-center justify-between mb-5">
      <h2 className="text-[1.3rem] font-normal">
        All New, Perfect For You
      </h2>
      <menu className="flex gap-6 items-center">
        <a className="hover:text-stone-400" href="#">
          Shop
        </a>
        <div className="flex gap-3">
          <button className="bg-[#F5F5F5] rounded-full p-2 hover:bg-stone-300 transition-colors duration-200 ">
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
                stroke-width="1.5"
                d="M15.525 18.966L8.558 12l6.967-6.967"
              ></path>
            </svg>
          </button>
          <button className="bg-[#F5F5F5] p-2 rounded-full hover:bg-stone-300 transition-colors duration-200 ">
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
                stroke-width="1.5"
                d="M8.474 18.966L15.44 12 8.474 5.033"
              ></path>
            </svg>
          </button>
        </div>
      </menu>
    </div>
  );
};

export default NavButtons;
