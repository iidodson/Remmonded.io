import React, { Component } from "react"; 
import UsersList from "../components/UsersList";
import "./Users.css";
import GoogleMapReact from 'google-map-react';
import Marker from "../../shared/UIElements/Marker"


const USERS =[
            {
                id: 1,
                name: "Ryan Destiny",
                image: "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
                places: 5
            },
            {
                id: 2,
                name: "Ryan Destiny",
                image: "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
                places: 5
            }
        ]

class Users extends Component {
  static defaultProps = {
    center: {
      lat: 37.75,  
      lng: -122.35  
    },
    zoom: 12
  };

  render() {
    return (
        <div className=" container container-users">
             <div className="UserList">
                <UsersList items={USERS}/>
          </div>
          <div className="test2">
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCUUF_foAO6rwOL9As_AmIjT4kzmiQ1qus"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <Marker
                lat={37.7951775}
                lng={-122.4049674}
                text=""
            />
            </GoogleMapReact>
          </div>
        </div>
    //   // Important! Always set the container height explicitly
    //   <div style={{ height: '100vh', width: '100%' }}>
       
    //   </div>
    );
  }
}

export default Users;
// function Users() {
//     const USERS =[
//         {
//             id: 1,
//             name: "Ryan Destiny",
//             image: "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
//             places: 5
//         },
//         {
//             id: 2,
//             name: "Ryan Destiny",
//             image: "https://gl-images.condecdn.net/image/7RJYOjyXmxR/crop/1800/f/ryandestiny_glamour_7mar18_insta_sq.jpg",
//             places: 5
//         }
//     ]

//     return (
//         <div className=" container container-users">
//             <div className="UserList">
//                 <UsersList items={USERS}/>
//             </div>
//             <div className="test2">
//    
//             </div>
//         </div>
    
//     );
// }


// export class Users extends Component {
//     render() {
//       return (
//         <div className=" container container-users">
//                      <div className="UserList">
//                          <UsersList items={USERS}/>
//                      </div>
//                      <div className="test2">
//                      <Map google={this.props.google} zoom={14}>
   
//                     <Marker onClick={this.onMarkerClick}
//                             name={'Current location'} />

//                     {/* <InfoWindow onClose={this.onInfoWindowClose}>
//                         <div>
//                             <h1>{this.state.selectedPlace.name}</h1>
//                         </div>
//                     </InfoWindow> */}
//                     </Map>
//                      </div>
//                  </div>
//       );
//     }
//   }

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCUUF_foAO6rwOL9As_AmIjT4kzmiQ1qus")
//   })(Users)