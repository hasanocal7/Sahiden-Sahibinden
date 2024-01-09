import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const GoogleMaps = ({ initialLatitude, initialLongitude }) => {
  const [mapCenter, setMapCenter] = useState({ lat: initialLatitude, lng: initialLongitude });
  const [locationInfo, setLocationInfo] = useState(null);


const mapStyles = {
  height: '500px',
  width: '100%',
};
  
  const getGeocodeInfo = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCBN1eyxepn25Pg467BE6Y0lo-O9p4DfMM`
      );
  
      const addressComponents = response.data.results[0].address_components;
      const city = addressComponents.find((component) =>
        component.types.includes('locality')
      )?.long_name || '';   
      const district = addressComponents.find((component) =>
        component.types.includes('administrative_area_level_2')
      )?.long_name || '';
      const neighborhood = addressComponents.find((component) =>
        component.types.includes('sublocality_level_1')
      )?.long_name || '';
  
      return { city, district, neighborhood };
    } catch (error) {
      console.error('Geocode API hatası:', error);
      return null;
    }
  };
  

  const handleMapClick = async (event) => {
    // Kullanıcının tıkladığı konumu al
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    // Harita merkezini güncelle
    setMapCenter(clickedLocation);

    // Konum bilgilerini al
    const locationInfo = await getGeocodeInfo(clickedLocation.lat, clickedLocation.lng);
    setLocationInfo(locationInfo);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCBN1eyxepn25Pg467BE6Y0lo-O9p4DfMM">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter} onClick={handleMapClick}>
        <Marker position={mapCenter} />
      </GoogleMap>
      {locationInfo && (
        <div>
          <p>İl: {locationInfo.city}</p>
          <p>İlçe: {locationInfo.district}</p>
          <p>Mahalle: {locationInfo.neighborhood}</p>
        </div>
      )}
    </LoadScript>
  );
};

const MapContainer = () => {
  // Dışarıdan alınan başlangıç konumları
  const initialLatitude = 36.8969;
  const initialLongitude = 30.7133;

  return <GoogleMaps initialLatitude={initialLatitude} initialLongitude={initialLongitude} />;
};

export default MapContainer;
