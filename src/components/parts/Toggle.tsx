import {useRef, useContext, useEffect} from 'react'
import {motion} from 'framer-motion';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import tryIt from '../../assets/arrow try.svg';
import context from '../../Context';

const modeLogo = {
  moon: {
    d: "M24 21C20.5 24.5 17.9706 26 13 26C8.02947 26 1.50003 21.5 0.500034 14C-2.23517e-08 9.5 2.00003 5.4999 5.00003 2.99995C8.00003 0.499998 12.5 -0.500039 16.5 0.499954C10.5 4.99995 11 10.5 12 14C14.5 20 20.5 21.5 24 21Z"
  },
  sun: {
    d: "M24 15C24 19.9706 19.9706 24 15 24C10.0294 24 6 19.9706 6 15C6 10.0294 10.0294 6 15 6C17.5552 6 19.8618 7.06486 21.5 8.77503C22.2526 9.56071 22.8642 10.4826 23.2941 11.5C23.7487 12.5759 24 13.7586 24 15Z"
  }
};

const Toggle = () => {
  const {darkMode, setDarkMode} = useContext(context);
  const tryRef = useRef<any>(null);

  const toggleDark = () => {
    window.document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
    tryRef.current.style.display = 'none';
    localStorage.setItem('darkModeStorage', JSON.stringify(!darkMode));
    localStorage.setItem('toggleClicked', 'true');
  }

  useEffect(() => {
    if(localStorage.getItem('toggleClicked')) tryRef.current.style.display = 'none';
  }, [])
  

  return (
    <>
      <motion.button className='bg-black hover:bg-neutral-900 cursor-point bg-opacity-90 w-auto h-12 md:h-16 absolute top-0 right-0 flex justify-center items-center text-white font-oswald font-light tracking-wide text-base md:text-[1.4vw] px-[3vw] md:px-[1.5vw] landscape:lg:py-[3vh] gap-3 z-50'
                     initial={{y: '-100%'}} animate={{y: '0%', transition: {duration:1, delay: .5, ease: [.1,.79,.31,.99]}}}
                     onClick={toggleDark}>
        {!darkMode ? 'dark' : 'light'} mode
        {/* <img src={!darkMode ? '/Moon.svg' : '/Sun.svg'} alt="dark mode toggle" className='h-5 md:h-[2vw]' /> */}
        <motion.svg width="29" height="29" viewBox="0 0 29 29" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={modeLogo} animate={!darkMode ? moon : sun} transition={{duration: 1}} fill="#FFFFFF"/>
        </motion.svg>

      </motion.button>
      <motion.div className='try-it w-[25vw] md:w-[10vw] h-16 absolute top-14 md:top-20 right-0 flex flex-col justify-center items-center cursor-point font-oswald font-light text-[#d9d9d9] text-sm md:text-base z-50'
                  initial={{opacity: 0}} animate={{opacity: 1, transition: {duration:.7, delay: 1.35}}}
                  ref={tryRef}>
        <img src={tryIt} alt="try dark mode img" className='h-6'/>
        try it
      </motion.div>
    </>
  )
}

export default Toggle