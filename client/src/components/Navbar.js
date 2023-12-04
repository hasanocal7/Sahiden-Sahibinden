import React from "react";
import "../style/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="tools">
        <div className="leftSide">
          <Link to='/' ><p> Sahipİlan.com </p></Link>
          
          <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                "& label": { color: "white" }, // "Kelime ile ara" rengini burada belirtebilirsiniz
              }}
            noValidate
            autoComplete="off">
            <TextField
              id="filled-basic"
              label="Kelime ile ara"
              variant="filled"
              
            />
          </Box>

          <div className="iconn">
            <SearchIcon />
          </div>
        </div>
        <div className="rightSide">
        <Link to='login'>   <p>Giriş Yap</p></Link>
          <p>Hesap Aç</p>
          
<Link to='ilanyukle'>
<button>Ücretsiz Ilan Ver</button>
</Link>
            
            
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
