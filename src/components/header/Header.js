import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/react-logo.png';
import { Icon } from 'antd';
import './Header.css';

const Header = props => (
    <header>
        <div>
            <Link to="/">
                <img src={Logo} alt="logo"/>
            </Link>
        </div>
        <h1>Register App</h1>
        <div id='account-logo'>
            <Link to='/account'>
                <Icon type="user" style={{color: '#00e2ff', fontSize: '26px'}}/>
            </Link>
        </div>
    </header>
)

export default Header;