import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/UserDetails.css";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

function UserDetails() {
  // ! Kullanıcı adı kaldırılacak
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(""); 
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [phone, setPhone] = useState("-");
  const [email, setEmail] = useState("-");

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
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await Axios.get("https://example.com/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsername(response.data.username);
        setFirst_Name(response.data.first_name);
        setLast_Name(response.data.last_name);
        setBirthDate(new Date(response.data.birthDate));
        setPhone(response.data.phone);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Kullanıcı bilgileri alınamadı", error);
      }
    };

    fetchUserData();
  }, []); 

  return (
    <div className="UserDetails">
      <div id="baslikBackground">
        <h2 className="baslik">Kişisel Bilgilerim</h2>
      </div>
      <div className="formMainDiv">
        <User
          label="Kullanıcı Adı"
          value={username}
          editMode={editMode}
          onChange={(e) => handleInputChange(e, setUsername)}
        />
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
              <input type="text" readOnly className="form-control-plaintext" />
            )}
          </div>
        </div>

        <User
          label="E-posta"
          value={email}
          editMode={editMode}
          onChange={(e) => handleEmailInputChange(e)}
        />
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label text-sm-start">
            Doğum Tarihi
          </label>
          <div className="col-sm-3">
            {editMode ? (
              <DatePicker
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                maxDate={new Date()}
                placeholderText="Gün/Ay/Yıl"
                className="form-control"
              />
            ) : (
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                value={birthDate ? birthDate.toLocaleDateString() : ""}
              />
            )}
          </div>
        </div>
        {editMode ? (
          <button className="btn" type="button" onClick={handleSaveClick}>
            Kaydet
          </button>
        ) : (
          <button className="btn " type="button" onClick={handleEditClick}>
            Düzenle
          </button>
        )}
      </div>
    </div>
  );
}
export default UserDetails;
