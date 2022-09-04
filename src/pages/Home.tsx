import Header from '../components/sections/Header'
import AboutSite from '../components/sections/AboutSite'
import Destinations from '../components/sections/Destinations'
import Footer from '../components/sections/Footer'
import PageTransitionOpen from '../components/parts/PageTransitionOpen'
import PageTransitionClose from '../components/parts/PageTransitionClose'
import {useContext, useState} from 'react'
import context from '../Context';
import Popup from '../components/parts/Popup'

const Home = () => {
  const {darkMode} = useContext(context);
  const [popup, setPopup] = useState<{show: boolean, type: 'click'|'input'|'', input: string}>({show: false, type: '', input: ''});

  return (
    <div className={darkMode ? 'bg-night' : 'bg-light'}>
        <Header/>
        <AboutSite setpopup={setPopup} popup={popup}/>
        <Destinations setpopup={setPopup} popup={popup}/>
        <Footer/>

        {popup.show && <Popup popup={popup} setpopup={setPopup}/>}
        <PageTransitionOpen direction="detail" />
        <PageTransitionClose from="detail" />
    </div>
  )
}

export default Home