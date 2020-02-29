import React from "react";
import './Avatar.css'

function Avatar(props) {
    return <img className="profile-image"src={props.image} alt={props.name} />
}

export default Avatar;