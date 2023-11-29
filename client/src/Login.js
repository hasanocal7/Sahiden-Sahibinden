import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <div className=""></div>
      <div id="baslikBackground">
        <h2 className="baslik">Sahiden</h2>
      </div>
      <div className="login-container">
        <h1>Giriş Yap</h1>
        <form id="login-form">
          <label htmlFor="username"></label>
          <input
            placeholder="E-posta adresi"
            type="text"
            id="username"
            name="username"
            required
          />

          <label htmlFor="password"></label>
          <div className="password-container">
            <input
              placeholder="Şifre"
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              required
            />

            <span
              className="toggle-password"
              onClick={togglePassword}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-eye${passwordVisible ? '' : '-slash'}-fill`}
                viewBox="0 0 16 16"
                style={{ cursor: 'pointer' }}
              >
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588M5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
              </svg>
            </span>
          </div>

          <button id='hshshshs' type="button" onClick={handleLogin}>
            E-posta ile Giriş Yap
          </button>

          <div className="forgot-password">
            <a href="#">Şifremi Unuttum</a>
          </div>

          <div className='no-account'>Henüz hesabın yok mu?<a href="#"> Hemen Kayıt Ol</a></div>
        </form>
      </div>
    </>
  );
};

export default App;
