import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  flightDate,
  fromData,
  fromDay,
  howMuch,
  passengerYear,
  toData,
  toDay,
} from "../../data/utilsData";
import SectionWrapper from "../wrapper's/SectionWrapper";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropDown from "./DropDown";
import toast, { Toaster } from "react-hot-toast";

// Lazy load the Table component
const Table = lazy(() => import("../table/Table"));

// FlightTableInfo component for displaying flight table information
const FlightTableInfo = React.memo(() => {
  // State variables
  const [dropDownText, setDropDownText] = useState("");
  const [fromText, setFromText] = useState("DAC");
  const [toText, setToText] = useState("IST");
  const [fromDayText, setFromDayText] = useState("Day -");
  const [toDayText, setToDayText] = useState("Day +");
  const [flightDateText, setflightDateText] = useState("Any Time");
  const [passengerYearText, setPassengerYearText] = useState("Adults");
  const [howMuchText, setHowMuchText] = useState("1");
  const [selectedDate, setSelectedDate] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("dummy");
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [noFlight, setNotFlight] = useState("");

  // Function to handle text change for dropdowns
  const handleText = (text, btn) => {
    if (btn === "from") {
      setFromText(text);
    } else if (btn === "to") {
      setToText(text);
    } else if (btn === "fromDay") {
      setFromDayText(text);
    } else if (btn === "toDay") {
      setToDayText(text);
    } else if (btn === "flightDate") {
      setflightDateText(text);
    } else if (btn === "passengerYear") {
      setPassengerYearText(text);
    } else if (btn === "howMuch") {
      setHowMuchText(text);
    }
  };

  // Fetch data from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
        setFilteredFlights([]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to handle search
  const handleSearch = () => {
    setLoading(true);
    if (!selectedDate) {
      setLoading(false); // Set loading to false immediately if no date is selected
      return toast.error("Please select a flight date!");
    }

    setTimeout(() => {
      const filtered = flights.filter((flight) => {
        const segments = flight.itineraries[0].segments;
        // Check if any segment matches the selected date and airport codes
        return segments.some((segment) => {
          const departureDate = new Date(segment.departure.at);
          return (
            departureDate.toDateString() ===
              new Date(selectedDate).toDateString() &&
            segment.departure.iataCode === fromText &&
            segment.arrival.iataCode === toText
          );
        });
      });
      if (filtered.length === 0) {
        setNotFlight("no flight");
      }
      setFilteredFlights(filtered);
      setLoading(false); // Set loading to false after filtering
    }, 1000);
  };

  // Function to handle radio button change
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      {/* Section for flight table information */}
      <SectionWrapper>
        <div className="flex items-center justify-between max-xl:flex-wrap gap-3 py-3">
          {/* Flight from dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("from")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="border px-2 h-9 w-32 flex items-center justify-between hover:bg-blue-50">
              {fromText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "from" ? "block" : "hidden"
              }`}
            >
              <DropDown data={fromData} handleText={handleText} btn={"from"} />
            </div>
          </div>
          {/* Flight to dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("to")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="h-9 border px-2 w-32 flex items-center justify-between">
              {toText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "to" ? "block" : "hidden"
              }`}
            >
              <DropDown data={toData} handleText={handleText} btn={"to"} />
            </div>
          </div>
          {/* Flight date input */}
          <input
            className="h-9 border px-3 py-1"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            type="date"
          />
          {/* Day from dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("fromDay")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="h-9 border px-2 gap-3 flex items-center justify-between">
              {fromDayText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "fromDay" ? "block" : "hidden"
              }`}
            >
              <DropDown
                data={fromDay}
                handleText={handleText}
                btn={"fromDay"}
              />
            </div>
          </div>
          {/* Day to dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("toDay")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="h-9 border px-2 gap-3 flex items-center justify-between">
              {toDayText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "toDay" ? "block" : "hidden"
              }`}
            >
              <DropDown data={toDay} handleText={handleText} btn={"toDay"} />
            </div>
          </div>
          {/* Flight dummy dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("flightDate")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="h-9 border px-2 w-36 flex items-center justify-between">
              {flightDateText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "flightDate" ? "block" : "hidden"
              }`}
            >
              <DropDown
                data={flightDate}
                handleText={handleText}
                btn={"flightDate"}
              />
            </div>
          </div>
          {/* Passenger year dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("passengerYear")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="h-9 border px-2 w-32 flex items-center justify-between">
              {passengerYearText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "passengerYear" ? "block" : "hidden"
              }`}
            >
              <DropDown
                data={passengerYear}
                handleText={handleText}
                btn={"passengerYear"}
              />
            </div>
          </div>
          {/* Passenger count dropdown */}
          <div
            className="relative z-20"
            onClick={() => setDropDownText("")}
            onMouseOver={() => setDropDownText("howMuch")}
            onMouseLeave={() => setDropDownText("")}
          >
            <button className="h-9 border px-2 w-32 flex items-center justify-between">
              {howMuchText} <MdOutlineKeyboardArrowDown />
            </button>
            <div
              className={`absolute transition-all duration-300 ${
                dropDownText === "howMuch" ? "block" : "hidden"
              }`}
            >
              <DropDown
                data={howMuch}
                handleText={handleText}
                btn={"howMuch"}
              />
            </div>
          </div>
        </div>
        {/* Extra options and search button */}
        <div className="flex items-center justify-between max-md:flex-wrap max-md:gap-3 border-b border-blue-400 py-4">
          {/* Extra options */}
          <div className="flex items-center gap-2">
            <input
              onChange={() => setChecked(!checked)}
              type="checkbox"
              checked={checked}
            />
            <span className="font-semibold">Extra Options</span>
          </div>
          {/* Environment radio buttons */}
          <div className="flex items-center gap-3">
            <p className="font-semibold">Environment</p>
            <input
              type="radio"
              id="dummy"
              name="dummy"
              value="dummy"
              checked={selectedOption === "dummy"}
              onChange={handleChange}
            />
            <label htmlFor="dummy">Dummy</label>
            <br />
            <input
              type="radio"
              id="pdt"
              name="pdt"
              value="pdt"
              checked={selectedOption === "pdt"}
              onChange={handleChange}
            />
            <label htmlFor="pdt">PDT</label>
            <br />
          </div>
          {/* Search button */}
          <button
            className="btn min-h-[2.1rem] h-[2.1rem] px-6 text-gray-200 bg-blue-900 hover:bg-blue-950"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {/* Table component */}
        <Suspense fallback={<div>Loading...</div>}>
          <Table
            fromText={fromText}
            toText={toText}
            selectedDate={selectedDate}
            noFlight={noFlight}
            loading={loading}
            handleSearch={handleSearch}
            filteredFlights={filteredFlights}
          />
        </Suspense>
      </SectionWrapper>
      {/* Toast component */}
      <Toaster />
    </div>
  );
});

export default FlightTableInfo;
