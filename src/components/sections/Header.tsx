import { useEffect, useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
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

const Header = () => {
  let accelamount = .1;
  let scrollpos = 0;
  let delay = 0;

  const {scrollYProgress} = useScroll();
  const personValue = useTransform(scrollYProgress,[0, 0, 1], [0, 25, -110])
  const mountainOneValue = useTransform(scrollYProgress,[0, 0, 1], [0, 25, -50])
  const mountainTwoValue = useTransform(scrollYProgress,[0, 0, 1], [0, 25, -25])
  
  useEffect(() => {
    const vid = document.querySelector('#vid') as any;
      
    const scrollplay = () => {
      delay += (scrollpos-delay)*accelamount;
      vid.currentTime = delay;
    }

    const setScrollPos = () => scrollpos = window.scrollY/120;
   
    window.addEventListener('scroll', () => setScrollPos());
  
    const videoInterval = setInterval(() => {
      if (scrollpos < 3) scrollplay()
      else return
    }, 33.33);

    return () => {
      window.removeEventListener('scroll', () => setScrollPos());
      clearInterval(videoInterval);
    }
  }, [])

  return (
    <div className='h-[90vh] md:h-screen relative overflow-hidden'>
        <div className='h-full bg-cover'>
          <video src={bgDay} id='vid' className='h-full md:w-screen object-cover'></video>
        </div>

        <motion.picture className='absolute -bottom-[2vh] md:-bottom-[10vh] -right-[15vw] md:-right-[20vw] w-[150%] md:w-full'
                        style={{y: mountainTwoValue}}>
            <source src={mountainTwoWebp} type="image/webp"/>
            <source src={mountainTwoPng} type="image/png"/>
            <img src={mountainTwoWebp} />
        </motion.picture>
        
        <motion.picture className='absolute -left-[30vw] md:-left-[15vw] -bottom-[10vw] md:-bottom-[13vh] w-[150%] md:w-full'
                        style={{y: mountainOneValue}}>
            <source src={mountainOneWebp} type="image/webp"/>
            <source src={mountainOnePng} type="image/png"/>
            <img src={mountainOneWebp} />
        </motion.picture>

        <motion.picture className='absolute -left-[95vw] md:left-0 -bottom-[25vw] md:-bottom-[12vh] w-[280%] md:w-full'
                        style={{y: personValue}}>
            <source srcSet={personDayWebp} type="image/webp"/>
            <source srcSet={personDayPng} type="image/png"/>
            <img src={personDayWebp} />
        </motion.picture>

        <div className='absolute bottom-0 h-[80px] md:h-[100px] w-full header-gradient'></div>
    </div>
  )
}

export default Header