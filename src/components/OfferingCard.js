import React from "react";

const OfferingCard = ({title, text, img}) => {
  return (
    <div className='group relative mx-auto border border-b-0 border-transparent  hover:border-[#00ff8a] bg-[url("/public/assets/images/box.svg")] cursor-pointer hover:bg-[url("/public/assets/images/platformBox-hover.svg")] transition-all duration-300  bg-cover rounded-[2.5rem] bg-no-repeat'>
      <img
        src="/assets/images/box.svg"
        className="invisible flex group-hover:hidden h-full w-max"
        loading="eager" alt=""
      />
      <img
        src="/assets/images/platformBox-hover.svg"
        className="invisible  group-hover:flex hidden h-full w-max"
        loading="eager" alt=""
      />
      <div className="absolute inset-0 rounded-3xl text-center  bg-opacity-50  bg-cover px-10 py-[1rem] flex flex-col justify-center space-y-8">
        {/* <img className="w-20 h-auto" src={img}   alt=""/> */}
        <h1 className=" font-medium text-3xl font-orbitron text-white">
          {title}
        </h1>
        <p className="text-white m-auto text-center font-pop text-[2vw] sm:text-[1vw] 2xl:text-sm max-w-[90%] sm:max-w-[85%] opacity-90">
          {text}
        </p>
        <button className="bg-white text-center mx-auto group-hover:bg-[#54FF7F] w-28 py-2 rounded-md text-xs font-pop font-semibold">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default OfferingCard;
