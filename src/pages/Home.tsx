import Header from '../components/sections/Header'
import AboutSite from '../components/sections/AboutSite'
import Destinations from '../components/sections/Destinations'
import Footer from '../components/sections/Footer'
import PageTransitionOpen from '../components/parts/PageTransitionOpen'
import PageTransitionClose from '../components/parts/PageTransitionClose'

const Home = () => {
  return (
    <>
        <Header/>
        <AboutSite/>
        <Destinations/>
        <Footer/>

        <PageTransitionOpen direction="detail" />
        <PageTransitionClose from="detail" />
    </>
  )
}

export default Home