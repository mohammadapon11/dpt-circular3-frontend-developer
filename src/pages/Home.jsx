import React from "react";
import NavBar from "../components/shared/NavBar"; // Importing the navigation bar component
import FlightTypeBtn from "../components/btn's/FlightTypeBtn"; // Importing the flight type button component
import Footer from "../components/shared/Footer"; // Importing the footer component
import FlightTableInfo from "../components/shared/FlightTableInfo"; // Importing the flight table information component

const Home = React.memo(() => {
  return (
    <>
      <NavBar /> {/* Rendering the navigation bar */}
      <FlightTypeBtn /> {/* Rendering the flight type button */}
      <FlightTableInfo /> {/* Rendering the flight table information */}
      <Footer /> {/* Rendering the footer */}
    </>
  );
});

export default Home;
