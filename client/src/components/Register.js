import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Register.css";


function Register() {
  return (
    <div className="registerContainer container mt-5  ">
      <h2 className="register-heading">Sahiden</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label"></label>
          <input type="text" className="registerFormControl form-control" id="fullName" placeholder="Adınız ve soyadınız" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input type="email" className="registerFormControl form-control" id="email" placeholder="E-posta adresiniz" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="password"></label>
          <input type="password" className="registerFormControl form-control" id="password" placeholder="Şifreniz" />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label"> </label>
          <input type="password" className="registerFormControl form-control" id="confirmPassword" placeholder="Şifrenizi tekrar girin" />
        </div>

        <button type="submit" className="registerButton btn btn-primary">Kaydol</button>
      </form>
    </div>
  );
}

export default Register;
