import SalesBanner from "./SalesBanner";
import HeroImages from "./HeroImages";
import NewArrival from "./NewArrival";

const HeroContainer = () => {
  return (
    <section className="font-hvm">
      <SalesBanner />
      <HeroImages />
      <NewArrival />
    </section>
  );
};

export default HeroContainer;
