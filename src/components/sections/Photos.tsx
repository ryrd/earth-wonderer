import React from 'react'
import DetailHeading from '../parts/DetailHeading'

const Photos = ({photos, photosId}: {photos: string[], photosId: string}) => {
  return (
    <>
      <DetailHeading text='photos'/>
      <div className='w-screen flex justify-center items-center mt-3 md:mt-2 md:mb-6 pb-7 md:pb-3'>
        <div className='w-[85%] columns-2 md:columns-3 gap-4 mt-10'>
          {photos.map((photo, i) => (
            <img src={`https://source.unsplash.com/${photo}`} className='mb-4' key={`${photosId}-${i}`}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Photos