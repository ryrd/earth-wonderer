import React from 'react'
import DetailHeading from '../parts/DetailHeading'
import PhotoBox from './PhotoBox'

interface photosProps {
  photos: string[], 
  photosId: string,
  setSelectedPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

const Photos = ({photos, photosId, setSelectedPhoto}: photosProps) => {
  return (
    <>
      <DetailHeading text='photos'/>
      <div className='w-screen flex justify-center items-center mt-3 md:mt-2 md:mb-6 pb-7 md:pb-3'>
        <div className='relative w-[85%] columns-2 sm:columns-3 gap-4 mt-10'>
          <span className='font-oswald font-light text-[6px] md:text-base leading-none absolute top-1 left-8 z-0 animate-pulse dark:text-white'>loading...</span>
          {photos.map((photo, i) => (
            <PhotoBox photo={photo} 
                      setSelectedPhoto={setSelectedPhoto}
                      key={`${photosId}-${i}`}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Photos