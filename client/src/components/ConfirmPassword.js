import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/ConfirmPassword.css";
import axios from "axios";

function ConfirmPassword() {
  const { id } = useParams();
  const [newPassword, setPassword] = useState("");
  const [confirmNewPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleConfirmPassword = async () => {
    try {
      if (!newPassword || !confirmNewPassword) {
        setError("Lütfen tüm alanları doldurun.");
        return;
      }

      if (newPassword !== confirmNewPassword) {
        setError("Şifreler uyuşmuyor. Lütfen kontrol edin.");
        return;
      }

      const passwordData = {
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword
      }

      const response = await axios.put(
        `https://sahiden-sahibinden-production.up.railway.app/api/forgot-password/${id}`,
        passwordData,
      );

      if (response.status === 200) {
        setMessage(
          "Şifre sıfırlama işlemi başarıyla tamamlandı. Yeni şifrenizle giriş yapabilirsiniz."
        );
        navigate("/");
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
      <h2 className="confirm-password-heading">DEHA</h2>

      <label htmlFor="password" className="confirm-password-label"></label>
      <input
        type="password"
        id="password"
        className="confirm-password-input mt-3"
        placeholder="Yeni şifrenizi girin"
        value={newPassword}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />

      <label
        htmlFor="confirmPassword"
        className="confirm-password-label"
      ></label>
      <input
        type="password"
        id="confirmPassword"
        className="confirm-password-input"
        placeholder="Yeni şifrenizi tekrar girin"
        value={confirmNewPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setError("");
        }}
      />

      <button
        onClick={handleConfirmPassword}
        className="confirm-password-button"
      >
        Şifreyi Onayla
      </button>

      {error && <p className="confirm-password-error">{error}</p>}
      {message && <p className="confirm-password-message">{message}</p>}
    </div>
  );
}

export default ConfirmPassword;
