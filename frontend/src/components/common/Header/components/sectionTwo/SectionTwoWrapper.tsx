//frontend/src/components/common/Header/HeaderSectionTwo.tsx

import { useEffect, useState } from "react";

import { StaticHeaderSection } from "./StaticSection";
import { HoverSection } from "./HoverSection";

const HeaderSectionTwo: React.FC<{
  isResponsiveHeaderActive: boolean;
  toggleResponsiveHeader: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isResponsiveHeaderActive, toggleResponsiveHeader }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [onNavigationHover, setOnNavigationHover] = useState("");

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`transition-transform duration-100 ease-in-out top-0 z-10 ${
          isResponsiveHeaderActive ? "" : "sticky"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="bg-white flex flex-col relative">
          <StaticHeaderSection
            onNavigationHover={onNavigationHover}
            width={width}
            setOnNavigationHover={setOnNavigationHover}
            toggleResponsiveHeader={toggleResponsiveHeader}
          />
          <HoverSection
            onNavigationHover={onNavigationHover}
            setOnNavigationHover={setOnNavigationHover}
          />
        </div>
      </header>
    </>
  );
};

export default HeaderSectionTwo;
