import { Routes, Route, useLocation } from 'react-router-dom';
import Destination from './pages/Destination';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ContextProvider } from './Context'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  
  return (
    <ContextProvider>
        <AnimatePresence mode='wait'>
          <Routes 
            location={location} 
            key={location.pathname}
          >
            <Route path='/' element={<Home/>}/>
            <Route path='/destination/:id' element={<Destination/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </AnimatePresence>
    </ContextProvider>
  )
}

export default App
