import {} from 'react'
import DetailHeading from '../parts/DetailHeading'
import Youtube from '../parts/Youtube'

const Video = ({video, videoOwner}: {video:string, videoOwner: string}) => {
  return (
    <>
      <DetailHeading text='video'/>
      <div className='portrait:h-[20vh] landscape:h-[80vh] flex justify-center items-center mt-3 md:mt-2 md:mb-6 pb-7 md:pb-3'>
        <div className='relative w-[60vw] aspect-video'>
          <Youtube link={video}/>
          <span className='font-oswald font-light text-[6px] md:text-base leading-none absolute -bottom-[15%] md:-bottom-[7%] right-[0%]'>video by <span className='font-bold text-[8px] md:text-xl leading-none'>{videoOwner}</span></span>
        </div>
      </div>
    </>
  )
}

export default Video