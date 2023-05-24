import React from 'react'
import OfferingCard from '../components/OfferingCard'

const Offering = () => {
  return (
    <div>
        <h1 className='my-20 font-orbitron text-white text-4xl text-center font-bold mx-auto'>Platform Offering</h1>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-20' data-aos="fade-up" data-aos-duration="2000">
            <OfferingCard/>
            <OfferingCard/>
            <OfferingCard/>
            <OfferingCard/>
            <OfferingCard/>
            <OfferingCard/>
        </div>
    </div>
  )
}

export default Offering