import React from "react";
import OfferingCard from "../components/OfferingCard";

const Offering = () => {
  let offerings = [
    {
      title: "Sportsbook",
      text: "Bet on a wide range of sports and events with Debetz's decentralized sportsbook.",
      img: "/assets/images/boxImg.svg",
    },
    {
      title: "Liquidity Pools",
      text: "Invest in Debetz's liquidity pools and earn rewards by providing liquidity to the platform.",
      img: "/assets/images/box-2.svg",
    },
    {
      title: "Casino games",
      text: "Experience the thrill of gambling on Debetz's decentralized casino platform, featuring popular games such as slots, blackjack, and roulette.",
      img: "/assets/images/box-3.svg",
    },
    {
      title: "House",
      text: "Become a house on Debetz by holding our native token and earn referral fees for inviting others to join the platform. Create and customize your own betting pools and compete for top spots on leaderboards.",
      img: "/assets/images/box-4.svg",
    },
    {
      title: "Yield Farming",
      text: "Bet on a wide range of sports and events with Debetz's decentralized sportsbook.Earn rewards by providing liquidity to Debetz's liquidity pools and participating in yield farming activities.",
      img: "/assets/images/box-5.svg",
    },
    {
      title: "Governance",
      text: "Have a say in the direction of the platform by participating in Debetz's governance system.",
      img: "/assets/images/box-6.svg",
    },
  ];
  return (
    <div>
      <h1 className="my-20 font-orbitron text-white text-4xl text-center font-bold mx-auto">
        Platform Offering
      </h1>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {offerings.map(({ img, text, title }) => (
          <OfferingCard img={img} text={text} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Offering;
