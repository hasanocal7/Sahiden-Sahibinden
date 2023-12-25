import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false); 

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>DEHA</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/login"
                activeclassname="active"
                className="nav-links"
                onClick={handleClose} 
              >
                Giriş Yap
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/register"
                activeclassname="active"
                className="nav-links"
                onClick={handleClose} 
              >
                Hesap Aç
              </NavLink>
            </li>
            <li className="nav-item mb-3">
              <NavLink
                eexact="true"
                to="/ilanyukle"
                activeclassname="active"
                className="nav-links"
                onClick={handleClose} 
                id="ad"
              >
                Ücretsiz İlan Ver
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose onClick={handleClose} />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen onClick={handleClick} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;