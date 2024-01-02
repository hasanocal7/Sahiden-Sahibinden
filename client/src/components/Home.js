import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "../style/home.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ComputerIcon from '@mui/icons-material/Computer';
import { Link } from "react-router-dom";

import axios from 'axios';

function Home() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('https://sahiden-sahibinden-production.up.railway.app/api/ads',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(response => {
        setData(response.data.results);
        setFilteredData(response.data.results); // İlk başta tüm veriyi göster
      })
      .catch(error => {
        console.error("Veri çekme hatası:", error);
        // Hata durumunda setFilteredData ile bir başlangıç değeri atanabilir.
        setFilteredData([]);
      });
  }, [token]);

  {filteredData && filteredData.map(item => (
    <div key={item.id}>
      {/* İlan detayları burada gösterilebilir */}
      <p>{item.title}</p>
      <p>{item.description}</p>
    </div>
  ))}

  const filterDataByCategory = (category) => {
    // Kategoriye göre filtreleme yap
    if (category === "emlak") {
      setFilteredData(data.filter(item => item.category === "Konut" || item.category === "Arsa"));
    } else if (category === "vasita") {
      setFilteredData(data.filter(item => item.category === "Otomobil" || item.category === "Motosiklet"));
    } else if (category === "elektronik") {
      setFilteredData(data.filter(item => item.category === "Bilgisayar" || item.category === "Telefon"));
    } else {
      // Tüm kategorileri göster
      setFilteredData(data);
    }
  };

  return (
    <div className="homeContainer container">
      <div className="leftSide">
        <div className="property">
          <div className="propertyArea" onClick={() => filterDataByCategory("emlak")}>
            <HomeIcon />
            <h4 style={{ color: '#394399' }}>Emlak</h4>
          </div>
          <ul>
            <li onClick={() => filterDataByCategory("emlak")}>Konut</li>
            <li onClick={() => filterDataByCategory("emlak")}>Arsa</li>
          </ul>
        </div>

        <hr />

        <div className="vasita">
          <div className="vasitaArea" onClick={() => filterDataByCategory("vasita")}>
            <DirectionsCarIcon />
            <h4 style={{ color: '#394399' }}>Vasıta</h4>
          </div>
          <ul>
            <li onClick={() => filterDataByCategory("vasita")}>Otomobil</li>
            <li onClick={() => filterDataByCategory("vasita")}>Motosiklet</li>
          </ul>
        </div>

        <hr />

        <div className="elektronik">
          <div className="elektronikArea" onClick={() => filterDataByCategory("elektronik")}>
            <ComputerIcon />
            <h4 style={{ color: '#394399' }}>Elektronik</h4>
          </div>
          <ul>
            <li onClick={() => filterDataByCategory("elektronik")}>Bilgisayar</li>
            <li onClick={() => filterDataByCategory("elektronik")}>Telefon</li>
          </ul>
        </div>

      </div>
      <div className="rightSide">
      {/* Filtrelenmiş verileri göster */}
      {filteredData && filteredData.map(item => (
        <div key={item.id}>
          {/* İlan detayları burada gösterilebilir */}
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
      <Link to='/ilan' exact={true}>Geçiş</Link>
    </div>
    </div>
  );
}

export default Home;
