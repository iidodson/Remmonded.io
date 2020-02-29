import React from 'react';
import PlaceItem from "./PlaceItem"
import './PlaceList.css'

function PlaceList(props) {
    if (props.items.length === 0){
        return (<div>
            <h1>No places created.</h1>
            <button>Create new place</button>
        </div>
        );
    }

    return <ul className="place-list">
           {props.items.map(function (place){
                return <PlaceItem 
                            key={place.id}
                            id={place.id}
                            image={place.imageURL}
                            title={place.title}
                            address={place.address}
                            createrId={place.creator}
                            coridnates={place.locationz                                     }
                        />;
            })}
    </ul>

}

export default PlaceList;