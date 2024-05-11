import React from "react";

// DropDown component for displaying dropdown menu
const DropDown = React.memo(({ data, handleText, btn }) => {
  return (
    <div className="bg-white shadow-2xl flex flex-col pb-5 w-[250px] rounded-2xl">
      {/* Mapping through data to render dropdown items */}
      {data?.map((item, index) => (
        <p
          onClick={() => handleText(item, btn)}
          className="hover:bg-gray-100 cursor-pointer pl-5 py-3"
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
});

export default DropDown;
