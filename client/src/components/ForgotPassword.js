import React, { useState } from 'react';
import '../style/ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
      } else {
        setMessage('Şifre sıfırlama işlemi başarısız oldu.');
      }
    } catch (error) {
      console.error('Şifre sıfırlama işlemi hatası:', error.message);
    }
  };

  return (
    <div className="forgot-password-container mt-5 d-flex flex-column align-items-center">
      <h2 className="forgot-password-heading">Sahiden</h2>
      <p className="forgot-password-text">E-posta adresini girerek şifre sıfırlama bağlantısı alabilirsin.</p>

      <label htmlFor="email" className="forgot-password-label">E-posta Adresi:</label>
      <input
        type="email"
        id="email"
        className="forgot-password-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleForgotPassword} className="forgot-password-button">
        Şifre Sıfırlama Bağlantısı Al
      </button>

      {message && <p className="forgot-password-message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
