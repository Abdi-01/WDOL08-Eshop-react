import React from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import Products from './pages/Products';
import { API_URL } from './helper';

function App() {

  const [loading, setLoading] = React.useState(true);

  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      let getLocalStorage = JSON.parse(localStorage.getItem('eshop_login'));
      console.log(getLocalStorage);
      if (getLocalStorage.id) {
        let res = await Axios.get(API_URL + `/user?id=${getLocalStorage.id}`);
        delete res.data[0].password;
        dispatch(loginAction(res.data[0])); // menjalankan fungsi action
        setLoading(false); // loading dimatikan ketika berhasil mendapat response
        localStorage.setItem('eshop_login', JSON.stringify(res.data[0]))
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false); // loading dimatikan ketika berhasil mendapat response
    }
  }

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <Navbar loading={loading} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/regis' element={<Register />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
