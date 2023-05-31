import React from 'react'

const Roadmap = () => {
  return (
    <div id='roadmap'>
        <h1 className="text-[#54FF7F] font-orbitron text-4xl mx-auto text-center my-10" >Our roadmap</h1>
        <img src="/assets/images/roadmap-lg.svg" className="w-full h-auto hidden sm:flex"/>
        <img src="/assets/images/roadmap-sm.svg" className="w-full h-auto flex justify-center sm:hidden mb-16 px-10"/>
    </div>
  )
}

export default Roadmap