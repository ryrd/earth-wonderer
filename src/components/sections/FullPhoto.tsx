import { motion } from "framer-motion"

interface fullPhotoProps {
  selectedPhoto: string | null, 
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

const tranProp = {
  duration: .6,
  ease : [.15,.77,.14,1]
}

const FullPhoto = ({selectedPhoto, setSelectedPhoto}: fullPhotoProps) => {
  
  return (
    <motion.div className={`${selectedPhoto === null ? 'hidden' : 'flex'} fixed top-0 left-0 z-50 h-screen w-screen justify-center items-center bg-dark bg-opacity-90`}
                onClick={() => setSelectedPhoto(null)}>
      <motion.img src={`https://source.unsplash.com/${selectedPhoto}`} 
                  className='w-auto h-auto max-w-[90%] max-h-[90%] object-contain'
                  alt="full selected photo"
                  onClick={e => e.stopPropagation()}
                  animate={selectedPhoto !== null ? {scale: 1, transition : tranProp} : {scale: .45, transition : tranProp}}
                  />
      
      <button className='absolute top-[5vh] portrait:left-[3vw] landscape:left-[5vw] w-10'>
        <div className='h-[2px] w-[80%] bg-white rotate-45'>&nbsp;</div>
        <div className='h-[2px] w-[80%] bg-white -rotate-45 -translate-y-[100%]'>&nbsp;</div>
      </button>
    </motion.div>
  )
}

export default FullPhoto