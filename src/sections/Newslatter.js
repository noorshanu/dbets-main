import React from "react";

const Newslatter = () => {
  return (
    <div className='bg-[url("/public/assets/images/newslatter-sm.svg")] sm:bg-[url("/public/assets/images/newslatter.svg")] bg-cover relative mt-14'>
      <img
        src="/assets/images/newslatter.svg"
        className="w-full  h-auto invisible hidden sm:flex" alt=""
      />
      <img
        src="/assets/images/newslatter-sm.svg"
        className="w-full  h-auto invisible flex sm:hidden" alt=""
      />
      <div className="absolute inset-0 max-w-[1030px] px-3 py-8 flex items-center mx-auto" data-aos="fade-right" data-aos-duration="3000">
        <div className="flex flex-col sm:flex-row  justify-between w-full">
          <div className="flex flex-col h-full justify-between max-w-[400px] sm:max-w-none">
            <h1 className="font-orbitron text-white font-bold md:text-3xl sm:text-2xl lg:text-4xl text-[5vw] text-center sm:text-left">
              STAY UP TO DATE WITH ALL THE LATEST NEWS
            </h1>
            <div className="rounded-lg border-opacity-60 border-white border-[0.01px] bg-[#0E0E1C]  hidden sm:flex justify-between sm:mt-5 lg:mt-12 max-w-sm ">
                <input  className="text-sm py-3 pl-4 text-white font-pop bg-transparent outline-none border-none" placeholder="Enter your mail"/>
                <button className="h-full py-3 px-5 bg-[#BC4AF2] rounded-lg text-white font-pop text-sm font-semibold scale-105">Subscribe</button>    
            </div>
          </div>
          <img src="/assets/images/line.svg" className="max-h-[94px] hidden sm:flex self-start lg:px-10 sm:px-4" alt=""/>
          <div>
            <p className="font-pop text-white text-[4vw] sm:text-[17px] my-7 sm:my-0 text-center sm:text-left">
              SIGN UP BELOW TO RECEIVE ALL THE LATEST UPDATES FROM Debetz HQ
            </p>
          </div>
          <div className="rounded-lg border-opacity-60 border-white border-[0.01px] bg-[#0E0E1C]  flex sm:hidden justify-between sm:mt-5 lg:mt-12 w-[83vw] mx-auto sm:mx-0 max-w-none sm:max-w-sm ">
                <input  className="text-sm py-3 pl-4 text-white font-pop bg-transparent outline-none border-none" placeholder="Enter your mail"/>
                <button className="h-full py-3 px-5 bg-[#BC4AF2] rounded-lg text-white font-pop text-sm font-semibold scale-105">Subscribe</button>    
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
