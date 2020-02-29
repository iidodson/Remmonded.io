import React from "react";
import './Navlinks.css';
import { NavLink } from "react-router-dom";

function Navlinks(props) {
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All users</NavLink>
            </li>
            <li>
                <NavLink to="/1/places" exact>My places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new" exact>New place</NavLink>
            </li>
            <li>
                <NavLink to="/auth" exact>Sign in</NavLink>
            </li>

        </ul>
    )
}

export default Navlinks;