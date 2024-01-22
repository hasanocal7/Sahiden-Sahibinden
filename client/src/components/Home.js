import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "../style/home.css";

function Home() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sahiden-sahibinden-production-3ef2.up.railway.app/api/ads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data.ads);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
        setData([]);
      }
    };

    fetchData();
  }, [token]);

  const handleSearch = () => {
    let filteredData = data;

    if (searchTerm) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (minPrice && maxPrice) {
      filteredData = filteredData.filter(
        (item) =>
          item.price >= parseInt(minPrice) && item.price <= parseInt(maxPrice)
      );
    }

    setData(filteredData);
  };

  const renderCategoryLink = (category, icon) => (
    <Link to="#">
      <div className={`${category.toLowerCase()}Area`}>
        {icon}
        <h4 style={{ color: "#394399" }}>{category}</h4>
      </div>
    </Link>
  );

 return (
    <>
      <Navbar />
      <div className="homeContainer container">
        <div className="row">
        <div className="col-md-3">
            <div className="filter">
              <h3>Fiyat Aralığı</h3>
              <div className="priceFilter">
                <input
                  type="number"
                  placeholder="Min Fiyat"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <div className="inputSpacer"></div>
                <input
                  type="number"
                  placeholder="Max Fiyat"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <button onClick={handleSearch}>Filtrele</button>
            </div>
          </div>

          <div className="col-md-12">
          <div className="search">
              <input
                type="text"
                placeholder="Ürün Ara"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="searchButton" onClick={handleSearch}>Ara</button>
            </div>
            <div className="row">
              {data &&
                data.map((item) => (
                  <div key={item.slug} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                      <img
                        src={`https://sahiden-sahibinden-production-3ef2.up.railway.app/uploads/${item.image[0]}`}
                        className="card-img-top fixed-size-image"
                        alt={item.title}
                      />
                     <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p>Fiyat: {item.price} TL</p>
                        <Link
                          to={`/ilan/${item.slug}`}
                          className="homeAdButton btn"
                          onClick={() =>
                            console.log(`Tıklanan İlan ID: ${item.slug}`)
                          }
                        >
                          İlanı Görüntüle
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="col-12 col-md-6 col-lg-4 mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Home;
