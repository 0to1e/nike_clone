import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer";
import Hero from "../../components/home/Hero/HeroContainer";
import Featured from "../../components/home/Featured/Featured";
import NewSection from "../../components/home/NewSection/NewSectionContainer";
import ClassicSection from "../../components/home/ClassicSection";
import SportSection from "../../components/home/SportSection";
import MemberBenifitSection from "../../components/home/MemberBenifitSection";
import CategoriesSection from "../../components/home/CategoriesSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
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
