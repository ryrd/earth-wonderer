import { useEffect, useRef } from 'react'
import bgNight from '../assets/header/night/bg-night.mp4'
import bgDay from '../assets/header/day/bg-day.mp4'
import Youtube from '../parts/Youtube'

const Header = () => {
    
  let accelamount = .1;
  let scrollpos = 0;
  let delay = 0;
  
  useEffect(() => {
    const vid = document.querySelector('#vid') as any;
      
    const scrollplay = () => {
      delay += (scrollpos-delay)*accelamount;
      vid.currentTime = delay;
    }

    const setScrollPos = () => scrollpos = window.scrollY/120;
   
    window.addEventListener('scroll', () => setScrollPos())
  
    const videoInterval = setInterval(() => {
      if (scrollpos < 3) scrollplay()
      else return
    }, 33.33);

    return () => {
      window.addEventListener('scroll', () => setScrollPos());
      clearInterval(videoInterval)
    }
  }, [])

  return (
    <>
        <video src={bgDay} id='vid'></video>
        <div>
            <Youtube link={'vpvmhpzGi_Q?start=124'}/>
            <Youtube link={'f6h9oafR7hM'}/>
            <Youtube link={'lNkI8ayV1jk'}/>
            <Youtube link={'unf4bmRnUGc'}/>
            <Youtube link={'yXYmI0Jyuf4'}/>
            <Youtube link={'6VQrr6ahkgM'}/>
        </div>
    </>
  )
}

export default Header