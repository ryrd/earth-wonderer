import {} from 'react'
import {motion} from 'framer-motion';
import moon from '../../assets/moon.svg';
import tryIt from '../../assets/arrow try.svg';
const Toggle = () => {
  return (
    <>
      <motion.button className='bg-black hover:bg-neutral-900 bg-opacity-90 w-[31vw] md:w-[10vw] h-12 md:h-16 absolute top-0 right-0 flex justify-center items-center text-white font-oswald font-light tracking-wide text-base md:text-[1.4vw] pl-2 pr-1 gap-3 z-50'
                     initial={{y: '-100%'}} animate={{y: '0%', transition: {duration:1, delay: .5, ease: [.1,.79,.31,.99]}}}>
        dark mode
        <img src={moon} alt="dark mode toggle" className='h-5 md:h-[2vw]' />
      </motion.button>
      <motion.div className='try-it w-[25vw] md:w-[10vw] h-16 absolute top-14 md:top-20 right-0 flex flex-col justify-center items-center font-oswald font-light text-[#d9d9d9] text-sm md:text-base'
                  initial={{opacity: 0}} animate={{opacity: 1, transition: {duration:.7, delay: 1.35}}}>
        <img src={tryIt} alt="try dark mode img" className='h-6'/>
        try it
      </motion.div>
    </>
  )
}

export default Toggle