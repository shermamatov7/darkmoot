import React from 'react';
import './Header.css'
import logo from '../images/logo.jpeg'

const Header = ({ state, setState }) => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />
                    <button onClick={() => setState(!state)}></button>

                </div>
            </div>
        </div>
    );
};

export default Header;