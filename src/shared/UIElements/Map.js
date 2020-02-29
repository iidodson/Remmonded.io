import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../../shared/UIElements/Marker";
import "./Map.css";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.75,
      lng: -122.35
    },
    zoom: 12
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCUUF_foAO6rwOL9As_AmIjT4kzmiQ1qus" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Marker lat={37.7951775} lng={-122.4049674} text="" />
      </GoogleMapReact>
    );
  }
}

export default Map;
