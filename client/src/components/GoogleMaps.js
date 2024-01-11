import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  maxWidth: "500px",
  height: "250px",
};

function GoogleMaps({ address, onSelect }) {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { province, district, neighborhood } = parseAddress(address);
        const locationInfo = await geocodeLocation(province, district, neighborhood);

        setLocationInfo(locationInfo);
        onSelect(locationInfo);
      } catch (error) {
        console.error("Konum bilgisi alınırken hata oluştu:", error);
      }
    };

    fetchLocation();
  }, [address, onSelect]);

  const parseAddress = (fullAddress) => {
    const [province, district, neighborhood] = fullAddress.split(", ");
    return { province, district, neighborhood };
  };

  const geocodeLocation = async (province, district, neighborhood) => {
    const apiKey = 'AIzaSyCBN1eyxepn25Pg467BE6Y0lo-O9p4DfMM';
    const address = `${province}, ${district}, ${neighborhood}`;
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);
    const data = await response.json();
  
    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
        province,
        district,
        neighborhood,
      };
    } else {
      throw new Error('Konum bilgisi bulunamadı');
    }
  };
  

  return (
    <LoadScript googleMapsApiKey="AIzaSyCBN1eyxepn25Pg467BE6Y0lo-O9p4DfMM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={locationInfo ? { lat: locationInfo.lat, lng: locationInfo.lng } : { lat: 0, lng: 0 }}
        zoom={10}
      >
        {locationInfo && <Marker position={{ lat: locationInfo.lat, lng: locationInfo.lng }} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMaps;
