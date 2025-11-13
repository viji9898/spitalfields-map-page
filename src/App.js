import React from "react";
import "./App.css";
import MapView from "./MapView";

const selectedPlace = {
  name: "BOTTLES",
  rating: 4.3,
  category: "Italian restaurant",
  status: "Closed until 12:00 PM",
  address: "67 Brushfield St, London E1 6AA, United Kingdom",
  image:
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

function App() {
  return (
    <div className="page">
      {/* LEFT: MAP */}
      <div className="map-wrapper">
        {/* Swap this iframe for a proper map component later if you want */}
        <div className="map-wrapper">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default App;
