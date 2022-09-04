import HomeHeading from '../parts/HomeHeading';
import DATA from '../../Data';
import DestinationBox from '../parts/DestinationBox';
import { Dispatch, SetStateAction } from 'react';

interface popupProps {
  popup: { show: boolean, type: "" | "click" | "input", input: string }
  setpopup: Dispatch<SetStateAction<{ show: boolean, type: "" | "click" | "input", input: string }>>
}

const Destinations = ({popup, setpopup}: popupProps) => {
  
  return (
    <>
      <HomeHeading text='&nbsp;&nbsp;Destinations&nbsp;&nbsp;&nbsp;' type='input' popup={popup} setpopup={setpopup} edit={true}/>
      <div className='w-full portrait:h-8 landscape:h-12'></div>
      {DATA.map(data => (
        <DestinationBox id={data.id} photo={data.mainPhoto} name={data.name} key={data.id} longText={data.longText}/>
      ))}
    </>
  )
}

export default Destinations