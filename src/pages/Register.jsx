import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import Axios from 'axios';
import { Button, Text } from '@chakra-ui/react';

const Register = (props) => {

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState('password');

    const onRegis = () => {
        alert(`${username} ${email} ${password}`)
    }

    const onVisibility = () => {
        if (visible == "password") {
            setVisible("text")
        } else if (visible == "text") {
            setVisible("password")
        }
    }

    return <div id='regispage' >
        <div className='container py-5'>
            <div className='row bg-white my-5 shadow rounded'>
                <div className='col-12 col-md-8 d-none d-md-block'>
                    <img src={require('../Assets/forms.png')} width="100%" alt='content' />
                </div>
                <div className='col-12 col-md-4 p-5 shadow'>
                    <h6 className='fw-bold muted-color'>START FOR FREE</h6>
                    <Text className='fw-bold' fontSize="4xl"> Sign up to E-SHOP</Text>
                    <div className='d-flex'>
                        <h6 className='muted-color'>Already a member ?</h6>
                        <h6 className='ms-2 main-color fw-bold'>Sign In</h6>
                    </div>
                    <div id='form'>
                        <div className="my-3">
                            <label className="form-label fw-bold text-muted">Username</label>
                            <input type="text" className="form-control p-3" placeholder="example01" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="my-3">
                            <label className="form-label fw-bold text-muted">E-Mail</label>
                            <input type="email" className="form-control p-3" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="my-3 ">
                            <label className="form-label fw-bold text-muted">Password</label>
                            <div className='input-group border rounded'>
                                <input type={visible} className="form-control p-3 border-0" placeholder="6+ character" onChange={(e) => setPassword(e.target.value)} />
                                <span onClick={onVisibility} className="input-group-text bg-transparent border-0" id="basic-addon2">
                                    {
                                        visible == "password" ?
                                            <AiOutlineEye size={26} />
                                            : <AiOutlineEyeInvisible size={26} />
                                    }

                                </span>
                            </div>
                        </div>
                    </div>
                    <Button type='button'
                        width='full'
                        colorScheme='teal'
                        variant='solid'>
                        Create an account
                    </Button>
                    <div className='text-center text-muted'>
                        <span>or</span>
                    </div>
                    <button
                        onClick={() => window.open(`https://google.com`, '_blank').focus()}
                        className='btn btn-light py-2 text-muted mt-2 w-100 shadow'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <FcGoogle size={36} className="me-2" /> <span> Sign up with Google</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Register;