import NavBar from "../components/shared/NavBar";
import FlightTypeBtn from "../components/btn's/FlightTypeBtn";
import FlightTableInfo from "../components/btn's/FlightTableInfo";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <FlightTypeBtn />
      <FlightTableInfo />
      <Footer />
    </>
  );
};

export default Home;
