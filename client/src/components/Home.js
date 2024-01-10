import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ComputerIcon from "@mui/icons-material/Computer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "../style/home.css";

function Home() {
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
          <div className="col-md-4">
            <div className="property">
              {renderCategoryLink("Konut", <HomeIcon />)}
              {renderCategoryLink("Otomobil", <DirectionsCarIcon />)}
              {renderCategoryLink("Bilgisayar", <ComputerIcon />)}
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              {data &&
                data.map((item) => (
                  <div key={item.slug} className="col-12 col-md-6 col-lg-4">
                    <div className="card mb-4">
                      <img

                        src={`https://sahiden-sahibinden-production.up.railway.app/uploads/${item.image[0]}`}
                        className="card-img-top fixed-size-image"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Home;
