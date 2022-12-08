import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import { loginAction } from './actions/userAction';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
const API_URL = 'http://localhost:2500';
function App() {
  const dispatch = useDispatch();

  const keepLogin = () => {
    let getLocalStorage = JSON.parse(localStorage.getItem('eshop_login'));
    console.log(getLocalStorage);
    Axios.get(API_URL + `/user?id=${getLocalStorage.id}`)
      .then((res) => {
        delete res.data[0].password;
        dispatch(loginAction(res.data[0])); // menjalankan fungsi action
        localStorage.setItem('eshop_login', JSON.stringify(res.data[0]))
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/regis' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
