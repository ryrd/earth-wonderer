import { useRef, useEffect } from 'react';
import {motion, useScroll,useSpring, useTransform} from 'framer-motion'

import HomeHeading from '../parts/HomeHeading'

const About = () => {
  const aboutImgsRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({ target: aboutImgsRef, offset: ["start end", "end start"] });
  const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.005};
  const imgParallaxValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -90])
  const imgParallaxTwoValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -120])
  const imgRotateValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, 10])
  const imgRotateTwoValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -10])

  return (
    <div className='relative h-[55vh] md:h-[80vh] flex justify-center md:justify-start items-center flex-col md:pt-[6%] bg-offwhite dark:bg-dark'
         ref={aboutImgsRef}>
      <HomeHeading text='about'/>
      <p className='w-1/2 font-oswald font-light md:text-3xl text-center mt-8 md:mt-10 z-10'>
        <span className='font-oswand uppercase font-bold text-sm md:text-2xl'>Earth Wonderer</span> is a dummy website created by 
        <a href='https://ryrd.github.io' target='_blank'><span className='text-blue-900 font-gilda underline ml-1 md:ml-2'>ryrd</span>.</a> 
        &nbsp; this site is showing 2 cities, Banjarmasin and Kotabaru 
        from south Borneo Indonesia. and few underrate 
        but beautiful location around the world.
      </p>

      <motion.img src="https://source.unsplash.com/d4pCGPsFz8A" className='absolute right-[2%] md:right-[12%] top-[35%] md:top-[35%] w-28 md:w-56 z-0' 
                  style={{y: imgParallaxValue, rotate: imgRotateValue}}/>
      <motion.img src="https://source.unsplash.com/uftqFbfWGFY" className='absolute left-[2%] md:left-[15%] bottom-[2%] md:bottom-[2%] w-24 md:w-44 z-0' 
                  style={{y: imgParallaxTwoValue, rotate: imgRotateTwoValue}}/>
    </div>
  )
}

export default About