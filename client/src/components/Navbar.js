// Navbar.js
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'da token kontrolü
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
    // Çıkış yapma işlemi
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    // Kullanıcıyı giriş yap sayfasına yönlendirme
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <p>DEHA</p>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {!isLoggedIn && (
              <>
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
              </>
            )}

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    to="/ilanyukle"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClose}
                    id="ad"
                  >
                    Ücretsiz İlan Ver
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="bg-dark nav-links">
                    Çıkış Yap
                  </button>
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
