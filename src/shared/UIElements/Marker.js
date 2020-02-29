import React from "react";
import "./Marker.css";

function Marker(props) {
  return (
    <div className="marker">
      <div className="marker-dot">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Marker;
