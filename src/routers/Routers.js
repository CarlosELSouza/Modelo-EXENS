import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Downloads from '../pages/Downloads';


const Routers = () => {
  return <Routes basename="/home">

        <Route path="/" element={<Navigate to='/home'/>} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="home" element={<Home />} />
    
    </Routes>
}

export default Routers