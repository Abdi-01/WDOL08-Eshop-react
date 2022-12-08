import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { loginAction } from '../actions/userAction';
import { useDispatch } from 'react-redux';
const API_URL = 'http://localhost:2500';

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // untuk menjalankan action redux
    // data state
    // State untuk menampung data yang dimasukkan melalui element input
    const [inputEmail, setInputEmail] = React.useState('');
    const [inputPass, setInputPass] = React.useState('');
    const [inputType, setInputType] = React.useState('password');

    const onBtnLogin = () => {
        // alert(`${inputEmail} ${inputPass}`);
        // Melakukan request data ke server
        Axios.get(API_URL + `/user?email=${inputEmail}&password=${inputPass}`)
            .then((response) => {
                console.log(response.data);
                delete response.data[0].password;
                dispatch(loginAction(response.data[0])); // menjalankan fungsi action
                localStorage.setItem('eshop_login', JSON.stringify(response.data[0]))
                navigate('/', { replace: true });
            }).catch((error) => {
                console.log(error);
            })
    }

    const onBtnVisible = () => {
        if (inputType == 'password') {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }

    return <div id='loginpage'>
        <div className='container py-3 py-md-5'>
            <div id='form-login' className='card bg-white my-5 w-50 p-5 m-auto shadow'>
                <Text fontSize='4xl' className='fw-bold'>Sign in for shoping</Text>
                <div className='d-flex'>
                    <h6 className='muted-color'>Not have account ?</h6>
                    <h6 className='ms-2 main-color'>Sign Up</h6>
                </div>
                <div className='mt-5 mb-3'>
                    <label className='form-label fw-bold text-muted'>Email</label>
                    <input type='email' className='form-control p-3' onChange={(element) => setInputEmail(element.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label fw-bold text-muted'>Password</label>
                    <div className='input-group border rounded'>
                        <input type={inputType} className='form-control p-3 border-0' onChange={(element) => setInputPass(element.target.value)} />
                        <span className='input-group-text bg-transparent border-0' onClick={onBtnVisible}>
                            <AiOutlineEye />
                        </span>
                    </div>
                </div>
                <p className='text-muted my-3' style={{ textAlign: 'right' }}>Forgot password ?<span className='main-color'>Click here</span></p>
                <Button type='button' colorScheme='teal' variant='solid'
                    onClick={onBtnLogin}
                >Login</Button>
            </div>
        </div>
    </div>;
}

export default Login;