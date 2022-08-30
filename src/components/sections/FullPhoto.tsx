import React from 'react'

interface fullPhotoProps {
  selectedPhoto: string | null, 
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

const FullPhoto = ({selectedPhoto, setSelectedPhoto}: fullPhotoProps) => {
  return (
    <div className={`${selectedPhoto === null ? 'hidden' : 'flex'} fixed top-0 left-0 z-50 h-screen w-screen justify-center items-center bg-dark bg-opacity-80`}
          onClick={() => setSelectedPhoto(null)}>
      <img src={`https://source.unsplash.com/${selectedPhoto}`} 
           className='w-auto h-auto max-w-[90%] max-h-[90%] object-contain'
           alt="full selected photo"
           onClick={e => e.stopPropagation()}/>
      
      <button className='absolute top-[5vh] portrait:left-[3vw] landscape:left-[5vw] w-10'>
        <div className='h-[2px] w-[80%] bg-white rotate-45'>&nbsp;</div>
        <div className='h-[2px] w-[80%] bg-white -rotate-45 -translate-y-[100%]'>&nbsp;</div>
      </button>
    </div>
  )
}

export default FullPhoto