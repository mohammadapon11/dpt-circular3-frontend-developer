import React, { useState } from "react";
import { flightTypBtnData } from "../../data/utilsData";
import SectionWrapper from "../wrapper's/SectionWrapper";

const FlightTypeBtn = () => {
  const [activeBtn, setActiveBtn] = useState("One Way");
  return (
    <SectionWrapper>
      <div className="flex items-center justify-center py-6 mx-auto border-b border-sky-500">
        {flightTypBtnData?.map((item, index) => (
          <button
            onClick={() => setActiveBtn(item)}
            className={`px-6 border-t-[3px] border-l-[3px] border-b-[3px] border-blue-900 font-semibold ${
              activeBtn === item && "bg-blue-900 text-gray-200"
            } ${activeBtn != item && `border-r-[3px] border-blue-900`}`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FlightTypeBtn;
