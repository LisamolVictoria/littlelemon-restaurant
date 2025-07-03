import React from "react";
import LittleLemonLogo from '../assets/Logo.svg';

const Nav = () => {
    return(
        <nav>
            <img src={LittleLemonLogo} alt="Little Lemon Logo" height='36' ></img>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;