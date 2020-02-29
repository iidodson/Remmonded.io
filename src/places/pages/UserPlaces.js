import React from 'react';
import PlaceList from "../components/PlaceList"
import UserItem from "../../users/components/UserItem";
import { useParams } from "react-router-dom";


const DUMMY_PLACES = [
    {
        id:"p1",
        title: "Lincoln Memorial",
        description: "The Lincoln Memorial is an American national memorial built to honor the 16th President of the United States, Abraham Lincoln.",
        imageURL: "https://nonprofitquarterly.org/wp-content/uploads/2016/02/Lincoln-memorial-771x533.jpg",
        address: "2 Lincoln Memorial Cir NW, Washington, DC 20037",
        location: {
            lat: 38.8892686,
            log: -77.0523647
        },
        creator: "1"
    },
    {
        id:"p2",
        title: "Lincoln Memorial",
        description: "The Lincoln Memorial is an American national memorial built to honor the 16th President of the United States, Abraham Lincoln.",
        imageURL: "https://nonprofitquarterly.org/wp-content/uploads/2016/02/Lincoln-memorial-771x533.jpg",
        address: "2 Lincoln Memorial Cir NW, Washington, DC 20037",
        location: {
            lat: 38.8892686,
            log: -77.0523647
        },
        creator: "2"
    }
]

const DUMMY_USER = {
    id: 1,
    name: "Ryan Destiny",
    image: "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
    places: 5
};
function UserPlaces() {
    const userID  = useParams().userID;
    const loadedPlaces = DUMMY_PLACES.filter( place => place.creator === userID)

    return (
            <div className="container">
                <div>
                    <UserItem 
                            key={DUMMY_USER.id} 
                            id={DUMMY_USER.id} 
                            image={DUMMY_USER.image} 
                            name={DUMMY_USER.name} 
                            placeCount={DUMMY_USER.places}
                    />;
                </div>
                <div>
                    <PlaceList items={loadedPlaces} />
                </div>

            </div>
    );
}

export default UserPlaces;