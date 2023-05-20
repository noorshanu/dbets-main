import React from "react";

const BlurredText = ({ children, rgba, color }) => {
  return (
    <span className="relative">
      {" "}
      <span
        className={`drop-shadow-[0_1.2px_1.2px_rgba(${rgba})] fill-transparent`}
      >
        {" "}
        {children}
      </span>{" "}
      <span className={`absolute text-[${color}] left-[-3px] top-[3px]`}>
        {children}
      </span>
    </span>
  );
};

export default BlurredText;
