// Login.js

import React from 'react';
import '../style/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div>
      <form>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="e-posta"
          />
          <label htmlFor="floatingInput">E-posta adresi</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Şifre</label>
        </div>
      </form>
    </div>
  );
}

export default Login;
