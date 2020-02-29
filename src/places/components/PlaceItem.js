import React from 'react';
import Map from "../../shared/UIElements/Map"
import './PlaceItem.css'



function PlaceItem(props) {
    return (
      <li className="place-item">
          <div className="place-item__image">
              <img src={props.image} alt={props.title} />
          </div>
          <div>
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
          </div>
          <div className="place--item__actions">
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
      </li>
 
    );
}

export default PlaceItem;