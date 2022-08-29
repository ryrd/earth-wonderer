import {} from 'react';
import DetailHeading from '../parts/DetailHeading';
import locationLight from '../../assets/location logo light.svg';
import locationDark from '../../assets/location logo dark.svg';
import Map from '../parts/Map';

interface aboutPlaceProps {
  desc: string,
  mapLink: string,
  img: string,
  location: string
}

const AboutPlace = ({desc, mapLink, img, location}: aboutPlaceProps) => {
  return (
    <div className='relative'>
      <div className='z-10'>
        <DetailHeading text='about place'/>
      </div>
      <div className='portrait:h-auto landscape:h-[60vh] flex portrait:flex-col font-oswald font-light z-10'>
        <div className='h-full landscape:flex-1 flex justify-center items-center my-4'>
          <p className='w-[80%] text-[3.5vw] md:text-[1.5vw] landscape:ml-[10%]'>{desc}</p>
        </div>
        <div className='relative h-full landscape:flex-1 flex justify-center items-center'>
          <div className='relative w-[50%] h-[60%] flex flex-col justify-center items-center z-10'>
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 font-oswald font-light animate-pulse z-0'>loading...</span>
            <div className='flex text-[3vw] md:text-[1.2vw] w-[85%] md:w-[80%]'>
              <img src={locationLight} alt="location logo" className='mr-2 w-[6%] md:w-[6%]'/>{location}
            </div>
            <div className=' mt-2 w-auto md:w-[80%] portrait:h-[15vh] aspect-[4/3] relative overflow-hidden'>
              <Map link={mapLink}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPlace