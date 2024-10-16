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
  return (
    <>
      <HeaderContainer />
      <HeroContainer />
      <FeaturedSection />
      <NewSection />
      <ClassicSection />
      <SportSection />
      <MemberBenifitSection />
      <CategoriesSection />
      <Footer />
    </>
  );
};

export default HomePage;
