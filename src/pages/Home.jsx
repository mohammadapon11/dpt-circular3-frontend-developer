import NavBar from "../components/shared/NavBar";
import FlightTypeBtn from "../components/btn's/FlightTypeBtn";
import FlightFilterBtn from "../components/btn's/FlightFilterBtn";

const Home = () => {
  return (
    <>
      <NavBar />
      <FlightTypeBtn />
      <FlightFilterBtn />
    </>
  );
};

export default Home;
