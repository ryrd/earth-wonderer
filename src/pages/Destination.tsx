import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailHeader from '../components/sections/DetailHeader';
import Footer from '../components/sections/Footer';
import Video from '../components/sections/Video';
import Toggle from '../components/parts/Toggle';
import DATA from '../Data';

const Destination = () => {
  const {id} = useParams();
  const data = DATA.find(data => data.id === id) || 'not found';

  if (data === 'not found') return <p>data does not exist</p>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
  return (
    <div className='overflow-x-hidden'>
      <Toggle/>
      <DetailHeader name={data.name} img={data.mainPhoto} location={data.location}/>
      <Video video={data.video} videoOwner={data.videoOwner}/>
      <Footer/>
    </div>
  )
}

export default Destination