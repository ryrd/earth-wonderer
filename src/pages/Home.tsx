import React from 'react'
import Header from '../components/sections/Header'
import AboutSite from '../components/sections/AboutSite'
import Destinations from '../components/sections/Destinations'

const Home = () => {
  return (
    <>
        <Header/>
        <AboutSite/>
        <Destinations/>
        <div className="h-screen"></div>
    </>
  )
}

export default Home