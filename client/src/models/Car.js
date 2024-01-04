import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
function Car() {
  const [carDetails, setCarDetails] = useState({
    ilanNo: '',
    ilanTarihi: '',
    marka: '',
    seri: '',
    model: '',
    yil: '',
    yakit: '',
    vites: '',
    kilometre: '',
    kasaTipi: '',
    cekis: '',
  });
const token = localStorage.getItem("token")
  useEffect(() => {
    // Backend'den verileri çekmek için bir API çağrısı yapılabilir.
    // Bu örnek için sabit bir veri kullanılmıştır. Gerçek projede bir API endpoint kullanmanız gerekecek.
    const fetchData = async () => {
      try {
        // Örnek API çağrısı
        const response = await axios.get(
          "https://sahiden-sahibinden-production.up.railway.app/api/ads",
          
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data =  response.data;

        // API'den gelen verileri state'e set et
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData fonksiyonunu çağır
    fetchData();
  }, []); // useEffect, component mount olduğunda bir kere çalışır

  return (
    <>
      <Navbar />
      <div className="carDetails">
        <div className="container">
          <ul style={{listStyle:"none"}}>
            <li><b>İlan No:</b> {carDetails.ilanNo}</li>
            <li><b>İlan Tarihi:</b> {carDetails.ilanTarihi}</li>
            <li><b>Marka:</b> {carDetails.marka}</li>
            <li><b>Seri:</b> {carDetails.seri}</li>
            <li><b>Model:</b> {carDetails.model}</li>
            <li><b>Yıl:</b> {carDetails.yil}</li>
            <li><b>Yakıt:</b> {carDetails.yakit}</li>
            <li><b>Vites:</b> {carDetails.vites}</li>
            <li><b>Kilometre:</b> {carDetails.kilometre}</li>
            <li><b>Kasa Tipi:</b> {carDetails.kasaTipi}</li>
            <li><b>Çekiş:</b> {carDetails.cekis}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Car;
