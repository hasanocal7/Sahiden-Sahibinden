import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/ForgotPassword.css";
import "../style/Login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        setError("Lütfen geçerli bir e-posta giriniz.");
        toast.error("Lütfen geçerli bir e-posta giriniz.");
        return;
      }

      const response = await axios.post(
        "https://sahiden-sahibinden-production.up.railway.app/api/forgot-password",
        {
          email,
        }
      );

      if (response.status === 200) {
        toast.success("E-posta adresinizi kontrol ediniz.");
        setEmail("");
      } else {
        setMessage("Şifre sıfırlama işlemi başarısız oldu.");
      }
    } catch (error) {
      console.error("Şifre sıfırlama işlemi hatası:", error.message);
      setError(
        "Şifre sıfırlama işlemi başarısız oldu. Lütfen geçerli bir e-posta giriniz."
      );
    }
  };

  return (
    <div className=" container forgot-password-container mt-5  d-flex flex-column align-items-center">
      <h2 className="forgot-password-heading">DEHA</h2>
      <p className="forgot-password-text"></p>

      <label htmlFor="email" className="forgot-password-label"></label>
      <input
        type="email"
        id="email"
        className="forgot-password-input"
        placeholder="E-posta giriniz"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError(""); // Eposta değiştiğinde hata mesajını temizle
        }}
      />

      <button onClick={handleForgotPassword} className="forgot-password-button">
        Şifre Sıfırlama Bağlantısı Al
      </button>
      <Toaster />
      {error && <p className="forgot-password-error mt-3">{error}</p>}
      {message && <p className="forgot-password-message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
