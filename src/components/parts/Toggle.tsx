import React from 'react'
import moon from '../../assets/moon.svg';
import tryIt from '../../assets/arrow try.svg';
const Toggle = () => {
  return (
    <>
      <button className='bg-black hover:bg-neutral-900 bg-opacity-90 w-[31vw] md:w-[10vw] h-12 md:h-16 absolute top-0 right-0 flex justify-center items-center text-white font-oswald font-light text-base md:text-lg gap-3 z-50 duration-100'>
        dark mode
        <img src={moon} alt="dark mode toggle" className='h-5 md:h-7' />
      </button>
      <div className='try-it w-[25vw] md:w-[10vw] h-16 absolute top-14 md:top-20 right-0 flex flex-col justify-center items-center font-oswald font-light text-[#d9d9d9] text-sm md:text-base'>
        <img src={tryIt} alt="try dark mode img" className='h-6'/>
        try it
      </div>
    </>
  )
}

export default Toggle