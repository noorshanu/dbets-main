import React from "react";

const OfferingCard = () => {
  return (
    <div className='group relative mx-auto bg-[url("/public/assets/images/box.svg")] cursor-pointer hover:bg-[url("/public/assets/images/platformBox-hover.svg")] transition-all duration-300  bg-cover rounded-3xl bg-no-repeat'>
      <img
        src="/assets/images/box.svg"
        className="invisible flex group-hover:hidden h-full w-max"
      />
      <img
        src="/assets/images/platformBox-hover.svg"
        className="invisible  group-hover:flex hidden h-full w-max"
      />
      <div className="absolute inset-0 rounded-3xl  bg-opacity-50  bg-cover px-10 py-[1rem] flex flex-col justify-center space-y-8">
        <img className="w-20 h-auto" src="/assets/images/boxImg.svg"  />
        <h1 className="text-2xl font-medium font-orbitron text-white">
          Sportsbook
        </h1>
        <p className="text-white font-pop text-sm max-w-[70%] opacity-90">
          Bet on a wide range of sports and events with Debetz's decentralized
          sportsbook..
        </p>
        <button className="bg-white group-hover:bg-[#54FF7F] w-28 py-2 rounded-md text-sm font-pop font-semibold">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default OfferingCard;
