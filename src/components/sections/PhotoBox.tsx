import {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

interface photoBoxProps {
    photo: string,
    setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

const PhotoBox = ({photo, setSelectedPhoto}: photoBoxProps) => {
    let yParallax;
    if(window.innerWidth < window.innerHeight && window.innerWidth < 500) yParallax = -20
    else yParallax = -40

    const imgRef = useRef(null);
    const {scrollYProgress} = useScroll({ target: imgRef, offset: ["start end", "end start"] });
    const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.005};
    const imgParallaxValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [yParallax, -10]);

    return (
        <div className='relative mb-4 overflow-hidden cursor-pointer flex justify-center shadow-xl' 
            ref={imgRef}
            onClick={() => setSelectedPhoto(photo)}
            >
            <img src="/polaroid.webp" className='absolute top-0 w-full h-full object-fill z-10'/>
            <motion.img src={`https://source.unsplash.com/${photo}`} className='w-[80%] sm:w-auto object-cover transition duration-500 ease-out' 
                        style={{y: imgParallaxValue, scale: 1.2}}
                        />
        </div>
    )
}

export default PhotoBox