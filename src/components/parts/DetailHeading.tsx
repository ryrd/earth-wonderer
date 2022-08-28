import {} from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import arrowBack from '../../assets/arrow back.svg';
import arrowScroll from '../../assets/arrow scroll.svg';
import Toggle from './Toggle';

interface detailHeadingProps {
  img: string,
  name: string,
  location: string
}

const DetailHeading = ({img, name, location}: detailHeadingProps) => {
  const navigate =  useNavigate();
  return (
    <div className='relative h-screen w-screen overflow-hidden flex items-center'>
      <Toggle/>

      <img className='w-full h-full object-cover z-0' src={`https://source.unsplash.com/${img}`} alt="heading img" />
      
      <div className='absolute w-auto h-[25vh] z-10 blur-0 left-0 bottom-0 bg-offwhite text-white bg-opacity-20 backdrop-blur flex flex-col justify-center pl-12 pr-14 tracking-wide'>
        <div className='absolute left-0 h-full w-5 bg-dark'/>
        <h6 className='font-oswald text-[1.5vw] font-light -mb-5'>{location}</h6>
        <h1 className='font-anton uppercase text-[5.8vw] -mb-[6%]'>{name}</h1>
      </div>

      <motion.div className='absolute bottom-7 right-4 flex flex-col'
                  initial={{y: '-35%', opacity: 0}}
                  animate={{y: 0, opacity: 1, transition: {duration:1, delay: .5, ease: [.1,.79,.31,.99]}}}>
        <span className='font-oswald font-light tracking-wide text-[1.6vw] text-white inline-block mb-3 rotate-90'>scroll</span>
        <img className='h-20' src={arrowScroll} alt="scroll down indicator"/>
      </motion.div>

      <motion.button className='absolute top-[5%] left-[2%] z-10 radial-gradient w-[5vw] h-[5vw] flex justify-center items-center'
              onClick={() => navigate(-1)}
              initial={{scale: .3, opacity: 0}}
              animate={{scale: 1, opacity: 1, transition: {duration: .8, delay: .3, ease: [.1,.79,.31,.99]}}}>
        <img src={arrowBack} className='h-[50%]' alt="back home button"/>
      </motion.button>
    </div>
  )
}

export default DetailHeading