import React from "react";
import UsersList from "../components/UsersList";
import Map from "../../shared/UIElements/Map"
import "./Users.css";

const USERS = [
  {
    id: 1,
    name: "Ryan Destiny",
    image:
      "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
    places: 5
  },
  {
    id: 2,
    name: "Ryan Destiny",
    image:
      "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
    places: 5
  }
];

function Users() {
  return (
    <div className=" container container-users">
      <div className="UserList">
        <UsersList items={USERS} />
      </div>
      <div className="test2">
          <Map />
      </div>
    </div>
  );
}

export default Users;
