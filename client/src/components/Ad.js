import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps"; 
import "../style/ilan.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Ilan() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Konum seçildiğinde bu fonksiyon çağrılacak
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="fotograf bg-secondary text-light p-4">
            Fotoğraf
          </div>
        </div>
        <div className="col-md-6">
          <div className="özellik p-4">
            <p>Fiyat kısmı</p>
            <div className="property">
              <hr />
              <p>Özellikler Kısmı</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="slider bg-danger text-light p-4">
            Slider
            <hr/>
            <div className="icon mt-4">
              {/* GoogleMaps bileşenini kullanarak haritayı gösteriyoruz */}
              <GoogleMaps onSelect={handleLocationSelect} />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="selected-location bg-info text-light p-4">
            {/* Seçilen konumu gösteriyoruz */}
            {selectedLocation && (
              <p>Seçilen Konum: Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ilan;
