import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "../style/home.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ComputerIcon from "@mui/icons-material/Computer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function Home() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("https://sahiden-sahibinden-production.up.railway.app/api/ads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.results);
        setFilteredData(response.data.results);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setFilteredData([]);
      });
  }, [token]);

  const filterDataByCategory = (category) => {
    // Kategoriye göre filtreleme yap
    if (category === selectedCategory) {
      // Deselect category if already selected
      setFilteredData(data);
      setSelectedCategory(null);
    } else {
      // Select category and filter data
      setSelectedCategory(category);
      setFilteredData(
        data.filter((item) => item.category === category)
      );
    }
  };

  const renderCategoryLink = (category, icon) => (
    <Link to="#" onClick={() => filterDataByCategory(category)}>
      <div className={`${category}Area`}>
        {icon}
        <h4 style={{ color: "#394399" }}>{category}</h4>
      </div>
    </Link>
  );

  return (
    <>
      <Navbar />
      <div className="homeContainer container">
        <div className="leftSide">
          <div className="property">
            {renderCategoryLink("Konut", <HomeIcon />)}
            <ul>
              <li onClick={() => filterDataByCategory("Konut")}>Konut</li>
              <li onClick={() => filterDataByCategory("Arsa")}>Arsa</li>
            </ul>
          </div>

          <hr />

          <div className="vasita">
            {renderCategoryLink("Otomobil", <DirectionsCarIcon />)}
            <ul>
              <li onClick={() => filterDataByCategory("Otomobil")}>Otomobil</li>
              <li onClick={() => filterDataByCategory("Motosiklet")}>Motosiklet</li>
            </ul>
          </div>

          <hr />

          <div className="elektronik">
            {renderCategoryLink("Bilgisayar", <ComputerIcon />)}
            <ul>
              <li onClick={() => filterDataByCategory("Bilgisayar")}>Bilgisayar</li>
              <li onClick={() => filterDataByCategory("Telefon")}>Telefon</li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          {filteredData &&
            filteredData.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          <Link to="/ilan" exact={true}>
            Geçiş
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
