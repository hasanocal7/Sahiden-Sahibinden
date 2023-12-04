import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "../styles/home.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useState,useEffect} from 'react'
function Home() {
  // const [data, setData] = useState([])
  // axios.get('https://api.unsplash.com/photos/?client_id=SmQktg8eGtoo7E5xtU4UXb0-HHbqlDyajbdKYmDlpiU')
  // .then(response=>setData(response.data.results))
  return (
    <div className="contain">
      <div className="lefSide">
        <div className="emlak">
          <div className="emlakArea">
            <HomeIcon />
            <h4 style={{color:'#394399'}} >Emlak</h4>
          </div>

          <ul>
            <li>Konut</li>
            <li>İşyeri</li>
            <li>Arsa</li>
            <li>Bina</li>
            <li>Konut Projeleri</li>
          </ul>
          <hr></hr>
        </div>
        <div className="Vasıta">
          <div className="vasıtaArea">
            <DirectionsCarIcon />
            <h4 style={{color:'#394399'}} >Vasıta</h4>
          </div>

          <ul>
            <li>Otomobil</li>
            <li>Arazi,Suv</li>
            <li>Motosiklet</li>
            <li>Ticari Araçlar</li>
            <li>Deniz Araçları</li>
          </ul>
        </div>
      </div>
      <div className="rightSidee">
        <Link to='/ilan' >Geçiş</Link>
       
      </div>
    </div>
  );
}

export default Home;
