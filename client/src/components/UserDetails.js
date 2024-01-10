import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../style/UserDetails.css";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Navbar from "./Navbar";

function UserDetails() {
  const [editMode, setEditMode] = useState(false);
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [phone, setPhone] = useState("-");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    const inputText = e.target.value.replace(/\D/g, "");
    const truncatedText = inputText.slice(0, 11);
    setPhone(!inputText ? "" : `${truncatedText}`);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setFirst_Name("KullanıcınınAdı");
      setLast_Name("KullanıcınınSoyadı");
      setPhone("KullanıcınınTelefonu");
      setEmail("KullanıcınınEmaili");
    } else {
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem("token");

          const response = await Axios.get("https://sahiden-sahibinden-production.up.railway.app/api/users/panel", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFirst_Name(response.data.user.first_name);
          setLast_Name(response.data.user.last_name);
          setPhone(response.data.user.phone);
          setEmail(response.data.user.email);
        } catch (error) {
          console.error("Kullanıcı bilgileri alınamadı", error);
        }
      };

      fetchUserData();
    }
  }, [isLoggedIn]);

  return (
    <>
      <Navbar />
      <div className="UserDetails">
        <div id="baslikBackground">
          <h2 className="baslik">Kişisel Bilgilerim</h2>
        </div>
        <div className="formMainDiv">
          <User
            label="Adınız"
            value={first_name}
            editMode={editMode}
            onChange={(e) => handleInputChange(e, setFirst_Name)}
          />
          <User
            label="Soyadınız"
            value={last_name}
            editMode={editMode}
            onChange={(e) => handleInputChange(e, setLast_Name)}
          />

          <div className="row">
            <div className="col-sm-2 mb-3">
              <label className=" col-form-label text-sm-start">Telefon</label>
            </div>

            <div className="col-sm-10">
              {editMode ? (
                <input
                  type="tel"
                  className="form-control"
                  value={phone}
                  onChange={handlePhoneInputChange}
                />
              ) : (
                <input type="text" readOnly className="form-control-plaintext" value={phone} />
              )}
            </div>
          </div>

          <User
            label="E-posta"
            value={email}
            editMode={editMode}
            onChange={(e) => handleEmailInputChange(e)}
          />

          {editMode ? (
            <button className="userDetailsButton btn" type="button" onClick={handleSaveClick}>
              Kaydet
            </button>
          ) : (
            <button className="userDetailsButton btn " type="button" onClick={handleEditClick}>
              Düzenle
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
