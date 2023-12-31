import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import GoogleMaps from "./GoogleMaps";
import axios from "axios";
import "../style/Ad.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

function Ilan({}) {
  const { slug } = useParams();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [ad, setAd] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
   
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://sahiden-sahibinden-production.up.railway.app/api/ads/${slug}/detay`,
        {
        headers: {
          Authorization: `Bearer ${token}`,
        },}
        );

        const ad = response.data.ad
        console.log(ad);
        const images = ad.image || [];
        setImage(images);
      } catch (error) {
        console.error("Görseller alınırken hata oluştu:", error);
      }
    };

    fetchImages();
  }, []); 
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
    <Navbar/>
    <div className="adContainer container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="fotograf bg-secondary text-light p-4">
            <h2>{title}</h2>
            {image.map((name, index) => (
              <div key={index} className="fotograf bg-secondary text-light p-4">
                <h2>{title}</h2>
                <img className="smallImage" src={`https://sahiden-sahibinden-production.up.railway.app/uploads/${name}`} alt={`Ürün Fotoğrafı ${index + 1}`} />
              </div>
            ))}
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
              {/* <GoogleMaps onSelect={handleLocationSelect} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="selected-location bg-info text-light p-4">
            {selectedLocation && (
              <p>Seçilen Konum: Lat: {selectedLocation.lat}, Lng: {selectedLocation.lng}</p>
            )}
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Ilan;


// Görüntülenme ekranında keyleri ve valueleri oluştur buna göre çağır.