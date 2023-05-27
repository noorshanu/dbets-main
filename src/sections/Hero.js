import React from "react";
import BlurredText from "../components/BlurredText";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:pt-12 min-h-[80vh] sm:min-h-[85vh]">
      <h1 className="sm:text-6xl text-5xl md:text-8xl font-orbitron font-extrabold text-center" data-aos="fade-down" data-aos-duration="1000">
        <span className="relative mb-12">
          {" "}
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(84,255,127,1)] fill-transparent">
            {" "}
            BET
          </span>{" "}
          <span className="absolute text-[#fff] left-[-5px] top-[2px]">
            BET
          </span>
        </span>{" "}
        <br />
      </h1>
      <h1 className="mt-4 sm:text-7xl text-5xl md:text-8xl font-orbitron font-extrabold text-center" data-aos="fade-down" data-aos-duration="1000">
        <BlurredText rgba={"84,255,127,1"} color={"#54FF7F"}>
          with
        </BlurredText>
        <BlurredText rgba={"84,255,127,1"} color={"#54FF7F"}>
          freedom
        </BlurredText>
        <br />
        <BlurredText rgba={"84,255,127,1"} color={"#54FF7F"}>
          on
        </BlurredText>
        <BlurredText rgba={"84,255,127,1"} color={"#54FF7F"}>
          dbetez
        </BlurredText>
      </h1>
      <p className="mt-12 text-white text-lg max-w-2xl text-center" data-aos="fade-down" data-aos-duration="1000">
        Experience the power of decentralized betting on Debetz, the premier
        platform for fair and secure gambling.
      </p>
      <div className="flex mt-12 w-full justify-center">
      <div className="group w-[45%] sm:w-56 hover:bg-[#7109b6] bg-transparent rounded-xl p-1">
          <button className="w-full py-3 text-center  group-hover:bg-white group-hover:text-black rounded-xl outline-[2px] outline font-medium outline-white text-white">
            Enter App
          </button>
        </div>
        <div className="group w-[45%] sm:w-56 hover:bg-[#7109b6] bg-transparent rounded-xl p-1 ml-5">
          <button className="w-full py-3 text-center  group-hover:bg-white group-hover:text-black rounded-xl outline-[2px] outline font-medium outline-white text-white">
            Enter App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
