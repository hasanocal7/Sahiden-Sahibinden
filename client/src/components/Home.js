import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ComputerIcon from "@mui/icons-material/Computer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function Home({ item }) {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

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

        setData(response.data.ads);
        console.log(response.data.ads);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
        setData([]);
      }
    };

    fetchData();
  }, [token]);

  const renderCategoryLink = (category, icon) => (
    <Link to="#">
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
        <div className="row">
          <div className="col-md-4">
            <div className="property">
              {renderCategoryLink("Konut", <HomeIcon />)}
              <ul>
                <li>Konut</li>
                <li>Arsa</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="vasita">
              {renderCategoryLink("Otomobil", <DirectionsCarIcon />)}
              <ul>
                <li>Otomobil</li>
                <li>Motosiklet</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="elektronik">
              {renderCategoryLink("Bilgisayar", <ComputerIcon />)}
              <ul>
                <li>Bilgisayar</li>
                <li>Telefon</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {data &&
            data.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card mb-4">
                  <img
                    src={item.image[0]}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <Link
                      to={`/ilan/${item.id}`}
                      className="btn btn-primary"
                      onClick={() =>
                        console.log(`Tıklanan İlan ID: ${item.id}`)
                      }
                    >
                      İlanı Görüntüle
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* <Link to="/ilan" exact={true}>
          Geçiş
        </Link> */}
      </div>
    </>
  );
}

export default Home;
