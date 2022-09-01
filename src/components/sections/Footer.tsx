import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-night text-white py-3 px-4'>
      <div className='flex flex-row-reverse justify-between items-center h-[90%] w-full'>
        <span className='font-anton uppercase text-[5.5vw] sm:text-[3vw] tracking-wide'>earth wonderer</span>
        <div className='flex-1 items-center justify-center pr-2'>
          <div className='mt-1'>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent to-white'/>
          </div>
          <div className='flex justify-between items-center md:items-end font-oswald font-light'>
            <div className='text-[2.5vw] sm:text-[1vw] md:translate-y-[25%] md:ml-1'>created by <a href='https://ryrd.github.io' className='font-gilda text-blue-900 text-[4vw] sm:text-[1.8vw] underline underline-offset-2' target='_blank'>ryrd</a></div>
            <div className='text-[2.5vw] sm:text-[1vw] items-self-end'>2022</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer