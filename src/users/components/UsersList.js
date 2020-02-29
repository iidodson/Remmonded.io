import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList(props) {
    if(props.items.length === 0){
        return <h1>No users found.</h1>
    }
    return(
        <ul className="userlist-home">
            {props.items.map(function (user){
                return <UserItem 
                            key={user.id} 
                            id={user.id} 
                            image={user.image} 
                            name={user.name} 
                            placeCount={user.places}
                        />;
            })}
        </ul>
    );
}

export default UsersList;