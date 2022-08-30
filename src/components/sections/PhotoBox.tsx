import {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

interface photoBoxProps {
    photo: string,
    setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

const PhotoBox = ({photo, setSelectedPhoto}: photoBoxProps) => {
    const imgRef = useRef(null);
    const {scrollYProgress} = useScroll({ target: imgRef, offset: ["start end", "end start"] });
    const smoothSettings = {stiffness: 150, damping: 30, restDelta: 0.005};
    const imgParallaxValue = useTransform(useSpring(scrollYProgress,smoothSettings),[0, 1], [-30, 10]);

    return (
        <div className='mb-4 overflow-hidden cursor-pointer' 
            ref={imgRef}
            onClick={() => setSelectedPhoto(photo)}
            >
            <motion.img src={`https://source.unsplash.com/${photo}`} className='object-cover transition duration-500 ease-out' 
                        style={{y: imgParallaxValue, scale: 1.2}}
                        whileHover={{scale: 1.3}}
                        />
        </div>
    )
}

export default PhotoBox