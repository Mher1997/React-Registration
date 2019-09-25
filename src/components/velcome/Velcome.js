import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './Velcome.css';

const Velcome = () => {
    return (
        <div id="velcome">
            <h1>Welcome to our service, please sign up to continue</h1>
            <Link to="/registration">
                <Button 
                    type="primary" 
                    size="large"
                >    
                    Sign Up
                    <Icon type="export" />
                </Button>
            </Link>
        </div>
    )
}

export default Velcome