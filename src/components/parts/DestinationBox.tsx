import {useEffect, useRef} from 'react';
import {motion, useScroll,useSpring, useTransform} from 'framer-motion'
import arrow from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';

interface destinationBoxData {
    id: string,
    photo: string,
    name: string
}

const DestinationBox = ({id, photo, name}: destinationBoxData) => {
    const imgRef = useRef(null);
    const {scrollYProgress} = useScroll({ target: imgRef, offset: ["start end", "end start"] });
    const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.005};
    const imgParallaxValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [0, 100]);

    return (
        <div className='relative portrait:h-[30vh] landscape:h-[90vh] overflow-hidden flex items-end'
             ref={imgRef}>
            <motion.img src={`https://source.unsplash.com/${photo}`} 
                        className='w-[100%] portrait:h-[180%] landscape:h-[120%] object-cover'
                        style={{y: imgParallaxValue}}
                        />
            <Link to={`/destination/${id}`}>
                <button className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark backdrop-blur-sm bg-opacity-20 border-2 md:border-3 border-white dark:border-2 flex items-center px-3 md:py-2 md:px-6'>
                    <span className='font-anton uppercase text-white mix-blend-difference tracking-wider text-[7vw] md:text-[5vw]'>{name}</span>
                    <img src={arrow} className='ml-2 md:ml-5 h-[4vh] md:h-[9vh]'/>
                </button>
            </Link>
        </div>
  )
}

export default DestinationBox