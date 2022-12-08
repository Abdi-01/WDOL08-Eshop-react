import React from 'react';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = (props) => {

    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    });

    return <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <Link to='/'>
                <span className='fw-bold'>
                    E-SHOP
                </span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <span className="nav-link main-content-color" style={{ cursor: 'pointer' }} >Products</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link main-content-color" style={{ cursor: 'pointer' }} >About</span>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    {
                        username ?
                            <span>{username}</span>
                            :
                            <ButtonGroup>
                                <Link to='/login'>
                                    <Button type='button' colorScheme='teal' variant='solid'>Login</Button>
                                </Link>
                                <Link to='/regis'>
                                    <Button type='button' colorScheme='teal' variant='outline'>Register</Button>
                                </Link>
                            </ButtonGroup>
                    }
                </form>
            </div>
        </div>
    </nav>;
}

export default Navbar;