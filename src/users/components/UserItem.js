import React from "react";
import Avatar from "../../shared/Avatar";
import { Link } from "react-router-dom";
import "./UserItem.css";

function UserItem(props) {
    return(
        <li className="useritem">
            <div>
                <Avatar image={props.image} name={props.name}/>
            </div>
            <Link to={"/" +(props.id) +"/places"}>
                <div className="useritem-details">
                    <h1 className="one">{props.name}</h1>
                    <h2>{props.placeCount}</h2>
                </div>
            </Link>
        </li>
    );
}

export default UserItem;