import { Routes, Route } from 'react-router-dom';
import Destination from './pages/destination';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination/:id' element={<Destination/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
