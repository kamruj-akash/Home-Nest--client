import Container from "../../components/Container";
import Banner from "./Banner";
import FeaturedProperties from "./FeaturedProperties";
import JourneyStart from "./JourneyStart";
import NeighborhoodSpotlight from "./NeighborhoodSpotlight";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      <Container>
        {/* Featured Properties */}
        <FeaturedProperties />

        {/* WhyChooseUs */}
        <WhyChooseUs />

        {/* NeighborhoodSpotlight */}
        <NeighborhoodSpotlight />
      </Container>

      {/* JourneyStart */}
      <JourneyStart />
    </>
  );
};

export default Home;
