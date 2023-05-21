import React from 'react'

const OfferingCard = () => {
  return (
    <div className='rounded-3xl bg-[url("/public/assets/images/box.svg")] bg-opacity-50 outline outline-[0.01px] outline-white bg-cover px-10 py-[4.5rem] space-y-8'>
        <img className="" src="/assets/images/boximg.svg"/>
        <h1 className="text-2xl font-medium font-orbitron text-white">Sportsbook</h1>
        <p className="text-white font-pop text-sm max-w-[70%] opacity-90">Bet on a wide range of sports and events with Debetz's decentralized sportsbook..</p>
        <button className="bg-white w-28 py-2 rounded-md text-sm font-pop font-semibold">Learn more</button>
    </div>
  )
}

export default OfferingCard