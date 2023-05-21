import React from "react";

const Win = () => {
  return (
    <div className="mt-12 py-2">
     <img src="/assets/images/winframe.svg" className="w-full h-auto"/>
     <div className="rounded-full w-full py-4 items-center mt-6 px-10 bg-white bg-opacity-5 flex justify-between font-orbitron  text-white">
        <h1 className="font-medium sm:text-lg text-sm">Our Partners</h1>
        <div className="flex justify-between  w-[60%] items-center ">
            <img src="/assets/logos/smartSoft.svg" className="w-[8vw] sm:w-[6vw]"/>
            <img src="/assets/logos/eth.svg" className="w-[8vw] sm:w-[6vw]"/>
            <img src="/assets/logos/uniSwap.svg" className="w-[8vw] sm:w-[6vw]"/>
            <img src="/assets/logos/sportsBet.svg" className="w-[8vw] sm:w-[6vw]"/>
        </div>
     </div>
    </div>
  );
};

export default Win;
