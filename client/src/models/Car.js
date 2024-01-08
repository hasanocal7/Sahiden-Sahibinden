import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../App.css";

function Car() {
  const [adDataList, setAdDataList] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sahiden-sahibinden-production.up.railway.app/api/ads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.ads;
        setAdDataList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="carDetails">
        <div className="container">
          {adDataList.map((adData) => (
            <ul key={adData.id} style={{ listStyle: "none" }}>
            <li>
                <img src={adData.image} ></img>
              </li>
              <li>
                <b>İlan Numarası:</b> {adData.id}
              </li>
              <li>
                <b>İlan Başlığı:</b> {adData.title}
              </li>
              <li>
                <b>İlan Fiyatı:</b> {adData.price}
              </li>
              <li>
                <b>İlan Tarihi:</b> {adData.ilan_date}
              </li>
              <li>
                <b>İlan Açıklaması:</b> {adData.description}
              </li>
            
              <li>
                <b>Seri:</b> {adData.series}
              </li>
              <li>
                <b>Model:</b> {adData.model}
              </li>
              <li>
                <b>Yıl:</b> {adData.year}
              </li>
              <li>
                <b>Yakıt:</b> {adData.fuel}
              </li>
              <li>
                <b>Vites:</b> {adData.gear}
              </li>
              <li>
                <b>Kilometre:</b> {adData.km}
              </li>
              <li>
                <b>Kasa Tipi:</b> {adData.case_type}
              </li>
              <li>
                <b>Çekiş:</b> {adData.traction}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Car;
