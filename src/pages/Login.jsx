import React from 'react';
import { Text, Button } from '@chakra-ui/react';
import { AiOutlineEye } from 'react-icons/ai';
const Login = (props) => {
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
                    <input type='email' className='form-control p-3' />
                </div>
                <div className='mb-3'>
                    <label className='form-label fw-bold text-muted'>Password</label>
                    <div className='input-group border rounded'>
                        <input type='password' className='form-control p-3 border-0' />
                        <span className='input-group-text bg-transparent border-0'>
                            <AiOutlineEye />
                        </span>
                    </div>
                </div>
                <p className='text-muted my-3' style={{ textAlign: 'right' }}>Forgot password ?<span className='main-color'>Click here</span></p>
                <Button type='button' colorScheme='teal' variant='solid'>Login</Button>
            </div>
        </div>
    </div>;
}

export default Login;