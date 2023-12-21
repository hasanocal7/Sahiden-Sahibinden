import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "../style/home.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ComputerIcon from '@mui/icons-material/Computer';
import { Link } from "react-router-dom";
import axios from 'axios'
import {useState,useEffect} from 'react'
function Home() {
  // const [data, setData] = useState([])
  // axios.get('http://localhost:5000')
  // .then(response=>setData(response.data.results))
  return (
    <div className="homeContainer container">
      <div className="lefSide">

        <div className="emlak">
          <div className="emlakArea">
            <HomeIcon />
            <h4 style={{color:'#394399'}} >Emlak</h4>
          </div>
          <ul>
            <li>Konut</li>
            <li>Arsa</li>
          </ul>
        </div>
        
        <hr/>

        <div className="vasita">
          <div className="vasitaArea">
            <DirectionsCarIcon />
            <h4 style={{color:'#394399'}} >Vasıta</h4>
          </div>
          <ul>
            <li>Otomobil</li>
            <li>Motosiklet</li>
          </ul>
        </div>

        <hr/>

       <div className="elektronik">
          <div className="elektronikArea">
          <ComputerIcon />
            <h4 style={{color:'#394399'}} >Elektronik</h4>
          </div>
          <ul>
            <li>Bilgisayar</li>
            <li>Telefon</li>
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
