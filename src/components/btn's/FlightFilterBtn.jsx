import { useEffect, useState } from "react";
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
import DropDown from "../shared/DropDown";
import toast, { Toaster } from "react-hot-toast";
import Table from "../table/Table";

const FlightFilterBtn = () => {
  const [dropDownText, setDropDownText] = useState("");
  const [fromText, setFromText] = useState("JFK");
  const [toText, setToText] = useState("SYD");
  const [fromDayText, setFromDayText] = useState("Day -");
  const [toDayText, setToDayText] = useState("Day +");
  const [flightDateText, setflightDateText] = useState("Any Time");
  const [passengerYearText, setPassengerYearText] = useState("Adults");
  const [howMuchText, setHowMuchText] = useState("1");
  const [selectedDate, setSelectedDate] = useState("");
  const [checked, setChecked] = useState(false);

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
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    // Fetch data from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
        setFilteredFlights(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSearch = () => {
    const data = {
      fromText,
      toText,
      fromDayText,
      toDayText,
      flightDateText,
      passengerYearText,
      howMuchText,
      selectedDate,
    };
    if (!selectedDate) {
      return toast.error("Please select a date flight date!");
    }
    const filtered = flights.filter((flight) => {
      const departureDate = new Date(
        flight.itineraries[0].segments[0].departure.at
      );
      return (
        departureDate.toDateString() === new Date(selectedDate).toDateString()
      );
    });
    setFilteredFlights(filtered);
  };

  return (
    <SectionWrapper>
      <div className="flex items-center justify-between gap-3  py-3">
        {/* flight from */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("from")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="border px-2 h-9 w-32 flex items-center justify-between hover:bg-blue-50">
            {fromText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "from" ? "block" : "hidden"
            }`}
          >
            <DropDown data={fromData} handleText={handleText} btn={"from"} />
          </div>
        </div>
        {/* flight to */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("to")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="h-9 border px-2 w-32 flex items-center justify-between">
            {toText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "to" ? "block" : "hidden"
            }`}
          >
            <DropDown data={toData} handleText={handleText} btn={"to"} />
          </div>
        </div>
        {/* flight date */}
        <input
          className="h-9 border px-3 py-1"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          type="date"
        />
        {/* how much stay at least from days */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("fromDay")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="h-9 border px-2 gap-3 flex items-center justify-between">
            {fromDayText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "fromDay" ? "block" : "hidden"
            }`}
          >
            <DropDown data={fromDay} handleText={handleText} btn={"fromDay"} />
          </div>
        </div>
        {/* how much stay highest days */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("toDay")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="h-9 border px-2 gap-3 flex items-center justify-between">
            {toDayText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "toDay" ? "block" : "hidden"
            }`}
          >
            <DropDown data={toDay} handleText={handleText} btn={"toDay"} />
          </div>
        </div>
        {/* Dummy */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("flightDate")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="h-9 border px-2 w-36 flex items-center justify-between">
            {flightDateText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "flightDate" ? "block" : "hidden"
            }`}
          >
            <DropDown
              data={flightDate}
              handleText={handleText}
              btn={"flightDate"}
            />
          </div>
        </div>
        {/* plus icon */}
        <div className="text-2xl">+</div>
        {/* Passenger Year */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("passengerYear")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="h-9 border px-2 w-32 flex items-center justify-between">
            {passengerYearText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "passengerYear" ? "block" : "hidden"
            }`}
          >
            <DropDown
              data={passengerYear}
              handleText={handleText}
              btn={"passengerYear"}
            />
          </div>
        </div>
        {/* how much passenger */}
        <div
          className="relative"
          onClick={() => setDropDownText("")}
          onMouseOver={() => setDropDownText("howMuch")}
          onMouseLeave={() => setDropDownText("")}
        >
          <button className="h-9 border px-2 w-32 flex items-center justify-between">
            {howMuchText} <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={`absolute transition-all duration-300 ${
              dropDownText == "howMuch" ? "block" : "hidden"
            }`}
          >
            <DropDown data={howMuch} handleText={handleText} btn={"howMuch"} />
          </div>
        </div>
        {/* plus icon */}
        <div className="text-2xl">+</div>
      </div>
      <div className="flex items-center justify-between border-b border-blue-400 py-4">
        <div className="flex items-center gap-2">
          <input
            onClick={() => setChecked(!checked)}
            type="checkbox"
            checked={checked}
          />
          <span className="font-semibold">Extra Options</span>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-semibold">Environment</p>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">Dummy</label>
          <br />
          <input type="radio" id="age2" name="age" value="60" />
          <label for="age2">PDT</label>
          <br />
        </div>
        <button
          className="btn min-h-[2.1rem] h-[2.1rem] px-6 text-gray-200 bg-blue-900 hover:bg-blue-950"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <Table handleSearch={handleSearch} filteredFlights={filteredFlights} />
      <Toaster />
    </SectionWrapper>
  );
};

export default FlightFilterBtn;
