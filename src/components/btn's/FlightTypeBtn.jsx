import React, { useState } from "react";
import { flightTypBtnData } from "../../data/utilsData";
import SectionWrapper from "../wrapper's/SectionWrapper";

// FlightTypeBtn component for displaying flight type buttons
const FlightTypeBtn = React.memo(() => {
  // State for active button
  const [activeBtn, setActiveBtn] = useState("One Way");

  return (
    <SectionWrapper>
      {/* Section for displaying flight type buttons */}
      <div className="flex items-center justify-center py-6 mx-auto border-b border-sky-500">
        {/* Mapping through flight type data and rendering buttons */}
        {flightTypBtnData?.map((item, index) => (
          <button
            onClick={() => setActiveBtn(item)}
            // Dynamic class based on active button
            className={`px-6 transition-all duration-300 border-blue-900 font-semibold border-t-[3px] border-b-[3px] ${
              activeBtn === item && "bg-blue-900 text-gray-200 border-l-[3px]"
            } ${
              activeBtn !== item &&
              `hover:bg-blue-100  border-r-[3px] border-blue-900`
            } ${item === "Round Trip" ? "border-l-[3px]" : ""}`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
});

export default FlightTypeBtn;
