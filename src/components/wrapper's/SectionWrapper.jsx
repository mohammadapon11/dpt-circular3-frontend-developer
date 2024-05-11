import React from "react";

// it's a section wrapper component
const SectionWrapper = React.memo(({ children }) => {
  return (
    <div className="md:max-w-[1220px] mx-auto max-xl:px-10">{children}</div>
  );
});

export default SectionWrapper;
