import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import DetailHeader from '../components/sections/DetailHeader';
import Footer from '../components/sections/Footer';
import Video from '../components/sections/Video';
import Toggle from '../components/parts/Toggle';
import DATA from '../Data';
import Photos from '../components/sections/Photos';
import AboutPlace from '../components/sections/AboutPlace';
import FullPhoto from '../components/sections/FullPhoto';
import PageTransitionClose from '../components/parts/PageTransitionClose';
import PageTransitionOpen from '../components/parts/PageTransitionOpen';
import context from '../Context';

const Destination = () => {
  const {id} = useParams();
  const data = DATA.find(data => data.id === id) || 'not found';

  const {darkMode} = useContext(context);

  const [selectedPhoto, setSelectedPhoto] = useState<string|null>(null);

  if (data === 'not found') return <p>404</p>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className={`overflow-x-hidden ${darkMode ? 'bg-night' : 'bg-light'}`}>
      <Toggle/>
      <DetailHeader name={data.name} img={data.mainPhoto} location={data.location}/>
      <AboutPlace desc={data.desc} mapLink={data.mapLink} location={data.location}/>
      <Video video={data.video} videoOwner={data.videoOwner}/>
      <Photos photos={data.photos} photosId={data.id} setSelectedPhoto={setSelectedPhoto}/>
      <Footer/>

      <FullPhoto selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>

      <PageTransitionOpen direction="home" />
      <PageTransitionClose from="home" />
    </div>
  )
}

export default Destination