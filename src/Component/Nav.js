import React from "react";
import LittleLemonLogo from '../assets/Logo.svg';

const Nav = () => {
    return(
        <nav>
            <img src={LittleLemonLogo} alt="Little Lemon Logo" height='36' ></img>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>

            </ul>
        </nav>
    )
}

export default Nav;