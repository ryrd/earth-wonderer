import { Routes, Route } from 'react-router-dom';
import Destination from './pages/Destination';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ContextProvider } from './Context'

function App() {
  
  return (
    <ContextProvider>
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination/:id' element={<Destination/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </ContextProvider>
  )
}

export default App
