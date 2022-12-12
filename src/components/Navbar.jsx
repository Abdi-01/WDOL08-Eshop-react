import React from 'react';
import {
    Text, Avatar, AvatarBadge,
    Spinner, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Badge, Button, ButtonGroup
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';
import { logoutAction } from '../actions/userAction';
const Navbar = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { username, role } = useSelector((state) => {
        return {
            username: state.userReducer.username,
            role: state.userReducer.role
        }
    });

    const [openMenu, setOpenMenu] = React.useState(false);

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
                    <li className="nav-item" onClick={() => navigate('/products')}>
                        <span className="nav-link main-content-color" style={{ cursor: 'pointer' }} >Products</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link main-content-color" style={{ cursor: 'pointer' }} >About</span>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    {
                        props.loading ? <Spinner /> :
                            username && !props.loading ?
                                <Menu>
                                    <MenuButton type='button'>
                                        <Avatar name={username} size='md'>
                                            <AvatarBadge boxSize='1em' bg='green.500' />
                                        </Avatar>
                                    </MenuButton>
                                    <MenuList textColor='black'>
                                        {
                                            role == 'Admin' ?
                                                <div>
                                                    <MenuItem >Products Management</MenuItem>
                                                    <MenuItem>Transactions Management</MenuItem>
                                                </div>
                                                :
                                                <div>
                                                    <MenuItem >Cart </MenuItem>
                                                    <MenuItem >Transactions</MenuItem>
                                                    <MenuItem>Profile</MenuItem>
                                                </div>

                                        }
                                        <MenuDivider />
                                        <MenuItem onClick={() => dispatch(logoutAction())}>Logout<AiOutlineLogout className='ms-2' /></MenuItem>
                                    </MenuList>
                                </Menu>
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