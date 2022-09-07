import { useEffect, useState, useRef, useContext } from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import Toggle from '../parts/Toggle';
import context from '../../Context';
import arrow from '../../assets/arrow.svg';
// ---------import day assets-----------
import bgDay from '../../assets/header/day/bg-day.mp4'
import bgDayPic from '../../assets/header/day/bg-picture.jpg'
import personDayPng from '../../assets/header/day/person-day.png'
import personDayWebp from '../../assets/header/day/person-day.webp'
import mountainOnePng from '../../assets/header/day/mountain-1.png'
import mountainOneWebp from '../../assets/header/day/mountain-1.webp'
import mountainTwoPng from '../../assets/header/day/mountain-2.png'
import mountainTwoWebp from '../../assets/header/day/mountain-2.webp'
// ---------import night assets-----------
import bgNight from '../../assets/header/night/bg-night.mp4'
import bgNightPic from '../../assets/header/night/bg-picture-night.jpg'
import personNightPng from '../../assets/header/night/person-night.png'
import personNightWebp from '../../assets/header/night/person-night.webp'
import mountainOneNightPng from '../../assets/header/night/mountain-1-night.png'
import mountainOneNightWebp from '../../assets/header/night/mountain-1-night.webp'
import mountainTwoNightPng from '../../assets/header/night/mountain-2-night.png'
import mountainTwoNightWebp from '../../assets/header/night/mountain-2-night.webp'
import { Svg } from '../parts/Popup';

const Header = () => {
  const {darkMode} = useContext(context);

  const [titleUp, setTitleUp] = useState(false);

  const [mobile, setMobile] = useState(false);

  // ---------video playback variable----------
  let accelamount = .1;
  let scrollpos = 0;
  let delay = 0;

  //header ref for parallax imgs
  const parallaxContainerRef = useRef(null);

  // ------------horizontal parallax variable---------
  const [personHorizontalValue, setPersonHorizontalValue] = useState(0);
  const [mountainOneHorizontalValue, setMountainOneHorizontalValue] = useState(0);
  const [mountainTwoHorizontalValue, setMountainTwoHorizontalValue] = useState(0);

  // ------------vertical speed variable-----------
  let personSpeed;
  if(window.innerHeight > window.innerWidth) personSpeed = -90
  else personSpeed = -130
  const {scrollYProgress} = useScroll({ target: parallaxContainerRef, offset: ["end end", "end start"] });
  const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.01};
  const personVerticalValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, personSpeed])
  const mountainOneVerticalValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -65])
  const mountainTwoVerticalValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, -50])

  const earthRef = useRef<any>(null);
  const [itShowed, setItShowed] = useState(false);
  const showIt = () => {
    if(earthRef.current.innerText === 'WORLD') {
      setItShowed(true);
      setTimeout(() => setItShowed(false),3500);
    }
  }
  
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
      window.innerWidth > 500 && setScrollPos();
      window.scrollY > 10 ? setTitleUp(true) : setTitleUp(false)
    });
  
    const videoInterval = setInterval(() => {
      if (scrollpos < 3) scrollplay()
      else return
    }, 33.33);
    window.innerWidth < 500 && clearInterval(videoInterval);

    //-------horizontal parallax-------
    const horizontalParallax = (e: MouseEvent) => {
      setPersonHorizontalValue((e.pageX*-.05)+25);
      setMountainOneHorizontalValue((e.pageX*-.015)+25);
      setMountainTwoHorizontalValue((e.pageX*-.01)+25);
    }
    window.innerWidth > 500 && window.addEventListener('mousemove', (e: MouseEvent) => horizontalParallax(e));

    //check mobile
    window.innerWidth < 500 ? setMobile(true) : setMobile(false);

    return () => {
      window.removeEventListener('scroll', () => {
        setScrollPos();
        window.scrollY > 10 ? setTitleUp(true) : setTitleUp(false);
      });
      window.removeEventListener('mousemove', (e: MouseEvent) => horizontalParallax(e));
      clearInterval(videoInterval);
    }
  }, [])

  return (
    <div className='min-h-[600px] h-[90vh] md:portrait:h-[75vh] md:h-screen relative overflow-hidden'
         ref={parallaxContainerRef}>
      <Toggle/>

      <span className='absolute top-1/2 left-[20vw] -translate-x-1/2 -translate-y-1/2 z-0 font-oswald font-thin text-dark dark:text-white animate-pulse'>loading...</span>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full w-full bg-cover'>
        {mobile ? (
          <img src={darkMode ? bgNightPic : bgDayPic} className='h-full sm:w-screen object-cover' alt="header-bg-picture" />
        ) : (
          <video src={darkMode ? bgNight : bgDay} id='vid' className='h-full sm:w-screen object-cover'></video>
        )
      }
      </div>

      <motion.picture className='absolute -bottom-[2vh] -right-[15vw] w-[150vw] 
                                          sm:-bottom-[10vh] sm:-right-[20vw] sm:w-screen
                                  transition duration-300 ease-out md:transition-none z-20'
                      style={{y: mountainTwoVerticalValue, x: mountainTwoHorizontalValue}}>
          <source src={darkMode ? mountainTwoNightWebp : mountainTwoWebp} type="image/webp"/>
          <source src={darkMode ? mountainTwoNightPng : mountainTwoPng} type="image/png"/>
          <img src={darkMode ? mountainTwoNightWebp : mountainTwoWebp} className='w-full'/>
      </motion.picture>
      
      <motion.picture className='absolute -left-[30vw] -bottom-[10vw] w-[150vw] 
                                          sm:-left-[15vw] sm:-bottom-[13vh] sm:w-screen
                                  transition duration-300 ease-out md:transition-none z-30'
                      style={{y: mountainOneVerticalValue, x: mountainOneHorizontalValue}}>
          <source src={darkMode ? mountainOneNightWebp : mountainOneWebp} type="image/webp"/>
          <source src={darkMode ? mountainOneNightPng : mountainOnePng} type="image/png"/>
          <img src={darkMode ? mountainOneNightWebp : mountainOneWebp} className='w-full'/>
      </motion.picture>

      <motion.div className='absolute top-[15vh] md:top-[13vh] text-white font-anton uppercase text-center left-1/2 -translate-x-1/2 drop-shadow-lg transition duration-700 ease-out z-40'
                  animate={titleUp ? {y: '-50%', filter: 'blur(15px)', opacity: 0, x: '-50%'} : {y: '0%', filter: 'blur(0px)', opacity: 1, x: '-50%'}}>
        <div className='flex items-center justify-center z-10'>
          <div className='h-[2px] portrait:w-[20vw] landscape:w-[10vw] bg-gradient-to-r from-transparent to-offwhite'/>
          <h1 className='text-5xl md:text-[5vw] mx-4 z-10' 
              contentEditable suppressContentEditableWarning={true}
              ref={earthRef}>
                earth
          </h1>
          <div className='h-[2px] portrait:w-[20vw] landscape:w-[10vw] bg-gradient-to-l from-transparent to-offwhite'/>
        </div>
        <h1 className='text-7xl md:text-[10vw] z-0'>wonderer</h1>
      </motion.div>

      <div className={`${itShowed ? 'flex' : 'hidden'} justify-start w-full h-full absolute top-0 left-0 bg-black z-50`}>
        <Svg/>
      </div>

      <motion.picture className='absolute -left-[95vw] -bottom-[25vw] w-[280vw]
                                          md:portrait:-left-[6vw] md:portrait:-bottom-[5vh] md:portrait:w-[110vw]
                                          sm:-left-[1vw] sm:-bottom-[17vh] sm:w-screen
                                          2xl:-left-[1vw] 2xl:-bottom-[17vh] 2xl:w-screen
                                  transition duration-300 ease-out md:transition-none z-50'
                      style={{y: personVerticalValue, x: personHorizontalValue}}
                      onClick={showIt}>
          <source srcSet={darkMode ? personNightWebp : personDayWebp} type="image/webp"/>
          <source srcSet={darkMode ? personNightPng : personDayPng} type="image/png"/>
          <img src={darkMode ? personNightWebp : personDayWebp} className='w-full' />
      </motion.picture>

      <div className={`absolute bottom-0 h-[80px] md:h-[100px] z-[60] w-full ${darkMode ? 'header-gradient-dark' : 'header-gradient'}`}></div>

      <motion.div className='absolute bottom-[3vh] md:bottom-[5vh] left-1/2 -translate-x-1/2 z-[70] font-oswald text-white font-light flex flex-col items-center text-sm md:text-base'>
        <motion.span className='tracking-wide'>scroll down to explore</motion.span>
        <motion.img src={arrow} alt="scroll down" className='w-6 scroll-down' />
      </motion.div>
    </div>
  )
}

export default Header