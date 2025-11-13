import React from "react";
import "./App.css";

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
        <iframe
          title="Spitalfields Map"
          className="map-iframe"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Spitalfields+London`}
        />
      </div>

      {/* RIGHT: DETAILS PANEL */}
      <div className="details-panel">
        <div className="image-wrapper">
          <img
            src={selectedPlace.image}
            alt={selectedPlace.name}
            className="place-image"
          />
        </div>

        <div className="details-content">
          <h1 className="place-title">{selectedPlace.name}</h1>

          <div className="rating-row">
            <span className="star">★</span>
            <span className="rating-score">{selectedPlace.rating}</span>
            <span className="rating-separator">·</span>
            <span className="category">{selectedPlace.category}</span>
          </div>

          <div className="button-row">
            <button className="primary-btn">Directions</button>
            <button className="secondary-btn">Website</button>
          </div>

          <div className="meta-row">
            <span className="status-dot" />
            <span className="status-text">{selectedPlace.status}</span>
          </div>

          <div className="address-row">
            <span className="address-icon">📍</span>
            <span className="address-text">{selectedPlace.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
