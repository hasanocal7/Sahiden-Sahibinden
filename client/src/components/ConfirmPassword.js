import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/ConfirmPassword.css";
import axios from "axios";

function ConfirmPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleConfirmPassword = async () => {
    try {
      if (!password || !confirmPassword) {
        setError("Lütfen tüm alanları doldurun.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Şifreler uyuşmuyor. Lütfen kontrol edin.");
        return;
      }

      const response = await axios.post("http://localhost:3001/api/reset-password", {
        email: "user@example.com", 
        password,
      });

      if (response.status === 200) {
        setMessage("Şifre sıfırlama işlemi başarıyla tamamlandı. Yeni şifrenizle giriş yapabilirsiniz.");
        navigate("/login");
      } else {
        setMessage("Şifre sıfırlama işlemi başarısız oldu.");
      }
    } catch (error) {
      console.error("Şifre sıfırlama işlemi hatası:", error.message);
      setError("Şifre sıfırlama işlemi başarısız oldu.");
    }
  };

  return (
    <div className="container confirm-password-container mt-5 d-flex flex-column align-items-center">
      <h2 className="confirm-password-heading">Yeni Şifre Oluştur</h2>

      <label htmlFor="password" className="confirm-password-label">
        Yeni Şifre
      </label>
      <input
        type="password"
        id="password"
        className="confirm-password-input"
        placeholder="Yeni şifrenizi girin"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />

      <label htmlFor="confirmPassword" className="confirm-password-label">
        Yeni Şifre Tekrar
      </label>
      <input
        type="password"
        id="confirmPassword"
        className="confirm-password-input"
        placeholder="Yeni şifrenizi tekrar girin"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setError("");
        }}
      />

      <button onClick={handleConfirmPassword} className="confirm-password-button">
        Şifreyi Onayla
      </button>

      {error && <p className="confirm-password-error">{error}</p>}
      {message && <p className="confirm-password-message">{message}</p>}
    </div>
  );
}

export default ConfirmPassword;
