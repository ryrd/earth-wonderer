import React from 'react'

const HomeHeading = ({text}: {text:string}) => {
  return (
  <div className='flex items-center justify-center font-anton uppercase text-center z-10'>
    <div className='h-[2px] portrait:w-[20vw] landscape:w-[15vw] bg-gradient-to-r from-transparent to-[#090909]'></div>
    <h1 className='text-5xl md:text-7xl mx-5'>{text}</h1>
    <div className='h-[2px] portrait:w-[20vw] landscape:w-[15vw] bg-gradient-to-l from-transparent to-[#090909]'></div>
  </div>
  )
}

export default HomeHeading