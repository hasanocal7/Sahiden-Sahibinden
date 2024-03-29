import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style/navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
// import UserDetails from "../components/UserDetails";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/home" className="nav-logo">
            <span>Sahiden</span>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link
                    exact="true"
                    to="/"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClose}
                  >
                    Giriş Yap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact="true"
                    to="/register"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClose}
                  >
                    Hesap Aç
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link
                    to="/user-details"
                    className="nav-links"
                    onClick={handleClose}
                  >
                    Profilim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    exact="true"
                    to="/ilanyukle"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClose}
                    id="ad"
                  >
                    Ücretsiz İlan Ver
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="bg-dark nav-links" onClick={handleLogout}>
                    Çıkış Yap
                  </Link>
                </li>
              </>
            )}
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
