import {useRef} from 'react';

interface photoBoxProps {
    photo: string,
    setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

const PhotoBox = ({photo, setSelectedPhoto}: photoBoxProps) => {
    const imgRef = useRef(null);
    
    return (
        <div className='relative mb-2 sm:mb-4 overflow-hidden cursor-point flex justify-center shadow-xl' 
             ref={imgRef}
             onClick={() => setSelectedPhoto(photo)}
        >
            <img src="/polaroid.webp" className='absolute top-0 w-full h-full object-fill z-10'/>
            <img src={`${photo}`} className='w-auto sm:w-auto object-cover transition duration-500 ease-out'/>
        </div>
    )
}

export default PhotoBox