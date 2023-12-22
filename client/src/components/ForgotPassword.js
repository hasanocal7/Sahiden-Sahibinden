import React, { useState } from 'react';

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
        <div>
          <h2>Şifreni mi Unuttun?</h2>
          <p>E-posta adresini girerek şifre sıfırlama bağlantısı alabilirsin.</p>
    
          <label htmlFor="email">E-posta Adresi:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
          <button onClick={handleForgotPassword}>Şifre Sıfırlama Bağlantısı Al</button>
    
          {message && <p>{message}</p>}
        </div>
      );
    }
    
    export default ForgotPassword;