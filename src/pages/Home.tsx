import React from 'react'
import Header from '../components/sections/Header'
import About from '../components/sections/About'

const Home = () => {
  return (
    <>
        <Header/>
        <About/>
        <div className="h-screen"></div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407498.8057801068!2d55.247106240816166!3d-21.134471506963234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2178778110b8e43b%3A0x4a7f8e89ecdbeaf9!2zUsOpdW5pb24!5e1!3m2!1sen!2sid!4v1661569633725!5m2!1sen!2sid" width="600" height="450" loading="lazy"></iframe> */}
    </>
  )
}

export default Home