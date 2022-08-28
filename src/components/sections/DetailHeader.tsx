import {} from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import arrowBack from '../../assets/arrow back.svg';
import arrowScroll from '../../assets/arrow scroll.svg';

interface detailHeaderProps {
  img: string,
  name: string,
  location: string
}

const DetailHeader = ({img, name, location}: detailHeaderProps) => {
  const navigate =  useNavigate();
  
  return (
    <div className='relative flex items-center w-screen portrait:h-[80vh] landscape:h-screen overflow-hidden'>
      <img className='z-0 object-cover w-full h-full' src={`https://source.unsplash.com/${img}`} alt="heading img" />
      
      <motion.div className='absolute w-auto portrait:min-h-[10vh] landscape:h-[25vh] z-10 left-0 bottom-0 bg-offwhite text-white bg-opacity-20 backdrop-blur flex flex-col justify-center pl-5 pr-6 md:pl-12 md:pr-14 tracking-wide'
                  initial={{x: '-100%'}}
                  animate={{x: '0%', transition: {duration:1, delay: .2, ease: [.1,.79,.31,.99]}}}>
        <motion.div className='absolute left-0 w-2 md:w-5 h-full bg-dark' 
                    initial={{x: '-100%'}}
                    animate={{x: '0%', transition: {duration:1, delay: .9, ease: [.1,.79,.31,.99]}}}/>
        <div className='overflow-hidden h-[80%] flex flex-col justify-center'>
          <motion.h6 className='font-oswald text-[3vw] md:text-[1.5vw] font-light'
                     initial={{x: '-100%'}}
                     animate={{x: '0%', transition: {duration:1, delay: .6, ease: [.1,.79,.31,.99]}}}>
                      {location}
          </motion.h6>
          <motion.h1 className='font-anton uppercase text-[11vw] md:text-[5.8vw] leading-none'
                     initial={{x: '-100%'}}
                     animate={{x: '0%', transition: {duration:1, delay: .4, ease: [.1,.79,.31,.99]}}}>
                      {name}
          </motion.h1>
        </div>
      </motion.div>

      <motion.div className='absolute flex flex-col bottom-3 right-2 md:bottom-7 md:right-4'
                  initial={{y: '-35%', opacity: 0}}
                  animate={{y: 0, opacity: 1, transition: {duration:1, delay: .5, ease: [.1,.79,.31,.99]}}}>
        <span className='font-oswald font-light tracking-wide text-[2.9vw] md:text-[1.6vw] text-white inline-block mb-3 rotate-90'>scroll</span>
        <img className='h-12 md:h-20' src={arrowScroll} alt="scroll down indicator"/>
      </motion.div>

      <motion.button className='absolute top-[3%] portrait:left-[6%] landscape:left-[2%] z-10 radial-gradient w-[15vw] h-[15vw] md:w-[5vw] md:h-[5vw] flex justify-center items-center'
              onClick={() => navigate(-1)}
              initial={{scale: .3, opacity: 0}}
              animate={{scale: 1, opacity: 1, transition: {duration: .8, delay: .3, ease: [.1,.79,.31,.99]}}}>
        <img src={arrowBack} className='h-[50%]' alt="back home button"/>
      </motion.button>
    </div>
  )
}

export default DetailHeader