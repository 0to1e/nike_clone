import { useContext } from "react";
import { ResponsiveHeaderContext } from "../../contexts/ResponsiveHeaderContext";

import HeaderContainer from "../../components/common/Header/HeaderContainer";
import Footer from "../../components/common/Footer/Footer";
import HeroContainer from "../../components/home/Hero/HeroContainer";
import FeaturedSection from "../../components/home/FeaturedSection/Featured";
import NewSection from "../../components/home/NewSection/NewSectionContainer";
import ClassicSection from "../../components/home/ClassicSection/ClassicSection";
import SportSection from "../../components/home/SportSection/SportSection";
import MemberBenifitSection from "../../components/home/MemberBenifitSection/MemberBenifitSection";
import CategoriesSection from "../../components/home/CategoriesSection/CategoriesSection";

const HomePage = () => {
  const responsiveHeaderContext = useContext(ResponsiveHeaderContext);
  const isResponsiveHeaderActive =
    responsiveHeaderContext?.isResponsiveHeaderActive;
  return (
    <div
      className={`${
        isResponsiveHeaderActive ? "max-h-screen overflow-hidden" : ""
      }`}
    >
      <HeaderContainer />
      <HeroContainer />
      <FeaturedSection />
      <NewSection />
      <ClassicSection />
      <SportSection />
      <MemberBenifitSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
