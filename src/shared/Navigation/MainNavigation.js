import React from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "./MainHeader";
import NavLinks from "../Navigation/Navlinks";

function MainNavigation(props) {
    return(
        <MainHeader>
            <Link to = "/" className="logo">
                <h1>Your Places</h1>
            </Link>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="nav">
                <NavLinks />
            </nav>
        </MainHeader>
    )
}

export default MainNavigation;