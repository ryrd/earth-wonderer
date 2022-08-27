import { useEffect, useState, useRef } from 'react';
import {motion, useScroll,useSpring, useTransform, Variants} from 'framer-motion';
import Toggle from '../parts/Toggle';
import arrow from '../../assets/arrow.svg';

// ---------import day assets-----------
import bgDay from '../../assets/header/day/bg-day.mp4'
import personDayPng from '../../assets/header/day/person-day.png'
import personDayWebp from '../../assets/header/day/person-day.webp'

import mountainOnePng from '../../assets/header/day/mountain-1.png'
import mountainOneWebp from '../../assets/header/day/mountain-1.webp'

import mountainTwoPng from '../../assets/header/day/mountain-2.png'
import mountainTwoWebp from '../../assets/header/day/mountain-2.webp'

// ---------import night assets-----------
import bgNight from '../../assets/header/night/bg-night.mp4'

import personNightPng from '../../assets/header/night/person-night.png'
import personNightWebp from '../../assets/header/night/person-night.webp'

import mountainOneNightPng from '../../assets/header/night/mountain-1-night.png'
import mountainOneNightWebp from '../../assets/header/night/mountain-1-night.webp'

import mountainTwoNightPng from '../../assets/header/night/mountain-2-night.png'
import mountainTwoNightWebp from '../../assets/header/night/mountain-2-night.webp'

// -------------animation variant---------------
const container: Variants = {
  animate: {
    transition: {
      duration: 1,
      delayChildren: .5,
      staggerChildren: .25
    }
  },
}

const title = {
  initial: {
    opacity : 0,
  },
  animate: {
    opacity : 1,
  }
}

const scroll: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  },
}

const Header = () => {
  // ---------video playback variable----------
  let accelamount = .1;
  let scrollpos = 0;
  let delay = 0;

  //header ref for parallax imgs
  const parallaxContainerRef = useRef(null);
  // main title ref
  let title = useRef<HTMLDivElement>(null);

  // ------------horizontal parallax variable---------
  const [personHorizontalValue, setPersonHorizontalValue] = useState(0);
  const [mountainOneHorizontalValue, setMountainOneHorizontalValue] = useState(0);
  const [mountainTwoHorizontalValue, setMountainTwoHorizontalValue] = useState(0);

  // ------------vertical speed variable-----------
  const {scrollYProgress} = useScroll({ target: parallaxContainerRef, offset: ["end end", "end start"] });
  const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.01};
  const personVerticalValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -130])
  const mountainOneVerticalValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -65])
  const mountainTwoVerticalValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -50])
  
  useEffect(() => {
    //select bg video
    const vid = document.querySelector('#vid') as any;
    
    //set delay/current playback value
    const scrollplay = () => {
      delay += (scrollpos-delay)*accelamount;
      vid.currentTime = delay;
    }

    //set scrollY value function
    const setScrollPos = () => scrollpos = window.scrollY/120;
   
    window.addEventListener('scroll', () => {
      setScrollPos();

      if(window.scrollY > 10) {
        // @ts-ignore
        title.current.style.opacity = '0'
        // @ts-ignore
        title.current.style.filter = 'blur(12px)';
        // @ts-ignore
        title.current.style.transform = 'translate(-50%, -50px)';
      }
      else {
        // @ts-ignore
        title.current.style.opacity = '1';
        // @ts-ignore
        title.current.style.filter = 'blur(0)';
        // @ts-ignore
        title.current.style.transform = 'translate(-50%, 0px)';
      }
    });
  
    const videoInterval = setInterval(() => {
      if (scrollpos < 3) scrollplay()
      else return
    }, 33.33);

    //-------horizontal parallax-------
    const horizontalParallax = (e: MouseEvent) => {
      setPersonHorizontalValue((e.pageX*-.05)+25);
      setMountainOneHorizontalValue((e.pageX*-.015)+25);
      setMountainTwoHorizontalValue((e.pageX*-.01)+25);
    }
    window.addEventListener('mousemove', (e: MouseEvent) => horizontalParallax(e));

    return () => {
      window.removeEventListener('scroll', () => setScrollPos());
      window.removeEventListener('mousemove', (e: MouseEvent) => horizontalParallax(e));
      clearInterval(videoInterval);
    }
  }, [])

  return (
    <div className='h-[90vh] md:portrait:h-[75vh] md:h-screen relative overflow-hidden'
         ref={parallaxContainerRef}>
      <Toggle/>

      <div className='h-full bg-cover'>
        <video src={bgDay} id='vid' className='h-full md:w-screen object-cover'></video>
      </div>

      <motion.picture className='absolute -bottom-[2vh] -right-[15vw] w-[150vw] 
                                          md:-bottom-[10vh] md:-right-[20vw] md:w-screen
                                  transition duration-300 ease-out md:transition-none'
                      style={{y: mountainTwoVerticalValue, x: mountainTwoHorizontalValue}}>
          <source src={mountainTwoWebp} type="image/webp"/>
          <source src={mountainTwoPng} type="image/png"/>
          <img src={mountainTwoWebp} />
      </motion.picture>
      
      <motion.picture className='absolute -left-[30vw] -bottom-[10vw] w-[150vw] 
                                          md:-left-[15vw] md:-bottom-[13vh] md:w-screen
                                  transition duration-300 ease-out md:transition-none'
                      style={{y: mountainOneVerticalValue, x: mountainOneHorizontalValue}}>
          <source src={mountainOneWebp} type="image/webp"/>
          <source src={mountainOnePng} type="image/png"/>
          <img src={mountainOneWebp} />
      </motion.picture>

      <motion.div className='absolute top-[15vh] md:top-[13vh] text-white font-anton uppercase text-center left-1/2 -translate-x-1/2 drop-shadow-md transition duration-700 ease-out'
                  ref={title} variants={container} initial='initial' animate='animate'>
        <div className='flex items-center justify-center'>
          <div className='h-[2px] portrait:w-[20vw] landscape:w-[10vw] bg-gradient-to-r from-transparent to-offwhite'></div>
          <h1 className='text-5xl md:text-[5vw] mx-4'>earth</h1>
          <div className='h-[2px] portrait:w-[20vw] landscape:w-[10vw] bg-gradient-to-l from-transparent to-offwhite'></div>
        </div>
        <h1 className='text-7xl md:text-[10vw]'>wonderer</h1>
      </motion.div>

      <motion.picture className='absolute -left-[95vw] -bottom-[25vw] w-[280vw]
                                          md:portrait:-left-[6vw] md:portrait:-bottom-[0vh] md:portrait:w-[110vw]
                                          md:-left-[1vw] md:-bottom-[17vh] md:w-screen
                                  transition duration-300 ease-out md:transition-none'
                      style={{y: personVerticalValue, x: personHorizontalValue}}>
          <source srcSet={personDayWebp} type="image/webp"/>
          <source srcSet={personDayPng} type="image/png"/>
          <img src={personDayWebp} />
      </motion.picture>

      <div className='absolute bottom-0 h-[80px] md:h-[100px] w-full header-gradient'></div>

      <motion.div className='absolute bottom-[3vh] md:bottom-[5vh] left-1/2 -translate-x-1/2 font-oswald text-white font-light flex flex-col items-center text-sm md:text-base'
                  variants={container} initial='initial' animate='animate'>
        <motion.span variants={scroll}>scroll down to explore</motion.span>
        <motion.img variants={scroll} src={arrow} alt="scroll down" className='w-6 scroll-down' />
      </motion.div>
    </div>
  )
}

export default Header