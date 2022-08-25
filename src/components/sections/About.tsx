import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion'

import HomeHeading from '../parts/HomeHeading'

const About = () => {
  const {scrollYProgress} = useScroll();
  const imgParallaxValue = useTransform(scrollYProgress,[0, 1], [0, -50])
  const imgRotateValue = useTransform(scrollYProgress,[0, 1], [0, 10])
  const imgRotateTwoValue = useTransform(scrollYProgress,[0, 1], [0, -10])

  return (
    <div className='relative h-[80vh] flex justify-start items-center flex-col pt-[6%] bg-[#d9d9d9] dark:bg-[#090909]'>
      <HomeHeading text='about'/>
      <p className='w-1/2 font-oswald font-light md:text-3xl text-center mt-10 z-10'>
        <span className='font-oswand uppercase font-bold text-sm md:text-2xl'>Earth Wonderer</span> is a dummy website created by 
        <a href='https://ryrd.github.io' target='_blank'><span className='text-blue-900 font-gilda underline ml-2'>ryrd</span>.</a> 
        &nbsp; this site is showing 2 cities, Banjarmasin and Kotabaru 
        from south Borneo Indonesia. and few underrate 
        but beautiful location around the world.
      </p>

      <motion.img src="https://source.unsplash.com/d4pCGPsFz8A" className='absolute right-[12%] top-[35%] w-28 md:w-56 z-0' 
                  style={{y: imgParallaxValue, rotate: imgRotateValue}}/>
      <motion.img src="https://source.unsplash.com/uftqFbfWGFY" className='absolute left-[15%] bottom-[2%] w-24 md:w-44 z-0' 
                  style={{y: imgParallaxValue, rotate: imgRotateTwoValue}}/>
    </div>
  )
}

export default About