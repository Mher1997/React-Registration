import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/react-logo.png';
import './Header.css';

const Header = props => (
    <header>
        <div>
            <Link to="/">
                <img src={Logo}/>
            </Link>
        </div>
        <div id="header-title">
            <h1>Register App</h1>
        </div>
    </header>
)

export default Header;