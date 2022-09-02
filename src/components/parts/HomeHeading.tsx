import { motion } from "framer-motion"

const HomeHeading = ({text}: {text:string}) => {
  return (
  <div className='relative flex items-center justify-center font-kaushan uppercase text-center z-10'>
      <button className="w-8 h-8 bg-dark dark:bg-white text-white dark:text-dark rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
              onClick={() => console.log('click')}>
        ...
      </button>
    <motion.div className="relative flex items-center justify-center px-7"  drag="x" dragConstraints={{left: -300, right: 300}}>
      <img src="/paint.webp" className="absolute top-0 left-1/2 -translate-x-1/2 portrait:-translate-y-[15%] landscape:-translate-y-[10%] w-[50vw] portrait:h-[6vh] md:w-[35vw] landscape:h-[14vh] z-0 dark:invert"/>
      <h1 className='text-[5vw] md:text-[3.5vw] mx-2 md:mx-4 text-white dark:text-dark z-10'>{text}</h1>
    </motion.div>
  </div>
  )
}

export default HomeHeading