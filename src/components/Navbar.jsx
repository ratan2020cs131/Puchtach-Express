import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';
import logo from './images/logo.png'

const Navbar = () => {
    return (
        <div id='navbar'>
            <div id="logo">
                <img src={logo} alt="#" height="50px" width="50px" />
                <a href="/">पूछताछ<br></br>Express</a>
            </div>
            <div id="NavHome">
                <NavLink to="/" id='home-link'>Home</NavLink>
            </div>
            <div id="NavMenu">
                <ul>
                    <li className="Navlinks"><NavLink className='nav-link' to="/checkpnr">Check PNR</NavLink></li>
                    <li className="Navlinks"><NavLink className='nav-link' to="/trainstatus">Train Status</NavLink></li>
                    <li className="Navlinks"><NavLink className='nav-link' to="/searchtrain">Search Train</NavLink></li>
                    <li className="Navlinks"><NavLink className='nav-link' to="/checkfare">Check Fare</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;