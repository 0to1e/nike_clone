import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer'
import Hero from '../../components/home/Hero'
import Featured from '../../components/home/Featured'
import NewSection from '../../components/home/NewSection'
import ClassicSection from '../../components/home/ClassicSection'
import SportSection from '../../components/home/SportSection'
import MemberBenifitSection from '../../components/home/MemberBenifitSection'
import CategoriesSection from '../../components/home/CategoriesSection'
const HomePage = () => {
  return (
    <main className='bg-fuchsia-300'>
      <Header />
      <Hero />
      <Featured />
      <NewSection />
      <ClassicSection />
      <SportSection />
      <MemberBenifitSection />
      <CategoriesSection />
      <Footer />
    </main>
  );
};

export default HomePage;
