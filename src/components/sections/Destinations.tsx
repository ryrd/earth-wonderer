import HomeHeading from '../parts/HomeHeading';
import DATA from '../../Data';
import DestinationBox from '../parts/DestinationBox';

const Destinations = () => {
  
  return (
    <>
      <HomeHeading text='&nbsp;&nbsp;Destinations&nbsp;&nbsp;&nbsp;' type='input'/>
      <div className='w-full portrait:h-8 landscape:h-12'></div>
      {DATA.map(data => (
        <DestinationBox id={data.id} photo={data.mainPhoto} name={data.name} key={data.id} longText={data.longText}/>
      ))}
    </>
  )
}

export default Destinations