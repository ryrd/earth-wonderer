import { useNavigate } from 'react-router-dom';
import arrowBack from '../assets/arrow back.svg';

const NotFound = () => {
  const navigate =  useNavigate();

  return (
    <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-dark text-white flex flex-col justify-center items-center'>
      <h1 className='font-anton landscape:text-[10vw] portrait:text-[25vw]'>404</h1>
      <button onClick={() => navigate(-1)} className='bg-white text-dark p-2 font-oswald tracking-wide flex flex-row'>
        <img src={arrowBack} alt="back" className='invert h-[20px] w-auto mr-2 translate-y-1'/> go back
      </button>
      
    </div>
  )
}

export default NotFound