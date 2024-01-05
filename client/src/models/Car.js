import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../App.css";

function Car() {
  const [adData, setAdData] = useState({
    brand: "",
    series: "",
    model: "",
    year: "",
    fuel: "",
    gear: "",
    km: "",
    case_type: "",
    traction: "",
  });

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
        const data = response.data;
        setAdData(data);
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
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>İlan Başlığı:</b> {adData.title}
              <p>İlan Başlığı: {adData.brand}</p>
            </li>
            <li>
              <b>İlan No:</b> {adData.ilan_no}
            </li>
            <li>
              <b>İlan Tarihi:</b> {adData.ilan_date}
            </li>
            <li>
              <b>İlan Açıklaması:</b> {adData.description}
            </li>
            <li>
              <b>Marka:</b> {adData.brand}
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
        </div>
      </div>
    </>
  );
}

export default Car;
