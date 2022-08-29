import React from 'react'

const HomeHeading = ({text}: {text:string}) => {
  return (
  <div className='flex items-center justify-center font-anton uppercase text-center z-10'>
    <div className='h-[2px] portrait:w-[20vw] landscape:w-[15vw] bg-gradient-to-r from-transparent to-dark dark:to-white'></div>
    <h1 className='text-4xl md:text-7xl mx-2 md:mx-4 text-dark dark:text-white'>{text}</h1>
    <div className='h-[2px] portrait:w-[20vw] landscape:w-[15vw] bg-gradient-to-l from-transparent to-dark dark:to-white'></div>
  </div>
  )
}

export default HomeHeading