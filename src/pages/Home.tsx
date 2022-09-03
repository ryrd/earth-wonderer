import Header from '../components/sections/Header'
import AboutSite from '../components/sections/AboutSite'
import Destinations from '../components/sections/Destinations'
import Footer from '../components/sections/Footer'
import PageTransitionOpen from '../components/parts/PageTransitionOpen'
import PageTransitionClose from '../components/parts/PageTransitionClose'
import {useContext} from 'react'
import context from '../Context';
import Popup from '../components/parts/Popup'

const Home = () => {
  const {darkMode} = useContext(context);

  return (
    <div className={darkMode ? 'bg-night' : 'bg-light'}>
        <Header/>
        <AboutSite/>
        <Destinations/>
        <Footer/>

        <Popup/> 
        <PageTransitionOpen direction="detail" />
        <PageTransitionClose from="detail" />
    </div>
  )
}

export default Home