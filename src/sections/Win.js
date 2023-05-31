import React from "react";

const Win = () => {
  return (
    <div className="mt-12 py-2" id="win">
      <div className="relative bg-[url('/public/assets/images/buyDbets-sm.svg')] sm:bg-[url('/public/assets/images/buyDbets.svg')] bg-cover h-auto ">
        <img
          src="/assets/images/buyDbets.svg"
          className="w-full h-auto invisible hidden sm:flex " alt=""
        />
        <img
          src="/assets/images/buyDbets-sm.svg"
          className="w-full h-auto invisible flex sm:hidden " alt=""
        />
        <img src="/assets/images/hero-planet.svg" className="absolute -top-20 -left-6 w-full max-w-[430px] sm:hidden flex h-auto"/>
        <div className="absolute inset-0 pt-[0%] px-4 sm:px-6 md:px-8 lg:px-10 max-w-5xl mx-auto flex flex-col">
          <img
            src="/assets/images/buy-btn.svg"
            className="w-[30vw] hidden sm:flex h-auto self-center  hover:scale-110 cursor-pointer transition-all opacity-70 hover:opacity-100 mb-[10%]" alt=""
          />
          <img
            src="/assets/images/buy-btn-sm.svg"
            className="w-[48vw] h-auto flex sm:hidden self-center  hover:scale-110 cursor-pointer transition-all opacity-70 hover:opacity-100 mb-[6%] xs:mb-[12%]" alt=""
          />
          <h1 className="font-orbitron text-white font-medium md:text-4xl sm:text-3xl lg:text-5xl text-2xl text-center" data-aos="fade-right" data-aos-duration="3500">
            Win big on Debetz
          </h1>
          <p className="font-pop text-white text-opacity-75 leading-relaxed text-[3vw] sm:text-[1.4vw] 2xl:text-[20px] text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10" data-aos="fade-right" data-aos-duration="3500">
            The decentralized betting platform for fair and secure gambling. Our
            sportsbook, casino, and liquidity pools allow you to bet with
            cryptocurrency and invest with confidence. As a house on Debetz, you
            can earn referral fees and customize your own betting pools to
            create a personalized and engaging experience for users. Join the
            most trusted and innovative platform today and experience the future
            of online gambling on Debetz.
          </p>
        </div>
      </div>
      <div className="rounded-full w-full py-4 items-center mt-6 px-5 sm:px-10 bg-white bg-opacity-5 flex justify-between font-orbitron  text-white" id="partners">
        <h1 className="font-medium sm:text-lg text-sm">Our Partners</h1>
        <div className="flex justify-between  w-[60%] items-center ">
          <img
            src="/assets/logos/smartSoft.svg"
            className="h-[25px] sm:h-[40px] md:h-[50px]" alt=""
          />
          <img src="/assets/logos/eth.svg" className="h-[25px] sm:h-[40px] md:h-[50px]" alt="" />
          <img src="/assets/logos/uniSwap.svg" className="h-[25px] sm:h-[40px] md:h-[50px]" alt="" />
          <img
            src="/assets/logos/sportsBet.svg"
            className="h-[25px] sm:h-[40px] md:h-[50px]" alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Win;
