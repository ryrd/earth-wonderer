import {} from 'react';
import HomeHeading from '../parts/HomeHeading';
import DATA from '../../Data';
import DestinationBox from '../parts/DestinationBox';

const Destinations = () => {
  
  return (
    <div className='bg-offwhite dark:bg-dark'>
      <HomeHeading text='Destinations'/>
      <div className='w-full h-12'></div>
      {DATA.map(data => (
        <DestinationBox id={data.id} photo={data.mainPhoto} name={data.name} key={data.id}/>
      ))}
    </div>
  )
}

export default Destinations