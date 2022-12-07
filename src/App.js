import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/regis' element={<Register/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
