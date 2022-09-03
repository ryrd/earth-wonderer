import { Dispatch, SetStateAction, useContext, useRef } from 'react';
import {motion, useScroll,useSpring, useTransform} from 'framer-motion'
import HomeHeading from '../parts/HomeHeading';
import about1 from '../../assets/about/about1.webp';
import about2 from '../../assets/about/about2.webp';

interface popupProps {
  setpopup: Dispatch<SetStateAction<{ show: boolean; type: "" | "click" | "input"; }>>
}

const About = ({setpopup} : popupProps) => {
  const aboutImgsRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({ target: aboutImgsRef, offset: ["start end", "end start"] });
  const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.005};
  const imgParallaxValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -90])
  const imgParallaxTwoValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -120])
  const imgRotateValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, 10])
  const imgRotateTwoValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -10])

  return (
    <div className='relative h-auto flex justify-center md:justify-start items-center flex-col portrait:pb-[8vh] landscape:pb-[14vh] portrait:pt-8 landscape:pt-[6%]'
         ref={aboutImgsRef}>
      <HomeHeading text='&nbsp;&nbsp;about&nbsp;&nbsp;&nbsp;' type='click' setpopup={setpopup} />
      <p className='w-[70vw] md:w-1/2 font-oswald font-light md:text-[2.3vw] text-center mt-8 md:mt-10 z-10 dark:text-white dark:font-extralight'>
        <span className='font-oswald uppercase font-bold text-sm md:text-[2vw]'>Earth Wonderer</span> is a dummy website created by 
        <a href='https://ryrd.github.io' target='_blank'><span className='text-blue-900 font-gilda underline ml-1 md:ml-2'>ryrd</span>.</a> 
        &nbsp; this site is showing 2 cities, Banjarmasin and Kotabaru 
        from south Borneo Indonesia. and few underrate 
        but beautiful location around the world.
      </p>

      <div className={`absolute top-0 h-[120px] w-full bg-gradient-to-b from-offwhite dark:from-dark to-transparent`}></div>
      
      <motion.img src={about2} className='absolute -right-[8%] md:right-[12%] top-[45%] md:top-[35%] w-28 md:w-[16vw] z-0' 
                  style={{y: imgParallaxValue, rotate: imgRotateValue}}/>
      <motion.img src={about1} className='absolute -left-[5%] md:left-[13%] bottom-[0%] md:bottom-[2%] w-24 md:w-[14vw] z-0' 
                  style={{y: imgParallaxTwoValue, rotate: imgRotateTwoValue}}/>
    </div>
  )
}

export default About