import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import '../style/Register.css';
=======
// import './style.css';
>>>>>>> 35da89da0000d47e59d4214c8150853cbe143637




function Register() {
  return (
    <div className="container mt-5">
      <h2 className="">Kaydol</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Ad Soyad</label>
          <input type="text" className="form-control" id="fullName" placeholder="Adınız ve soyadınız" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-posta Adresi</label>
          <input type="email" className="form-control" id="email" placeholder="E-posta adresiniz" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="password">Şifre</label>
          <input type="password" className="form-control" id="password" placeholder="Şifreniz" />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Şifreyi Onayla</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Şifrenizi tekrar girin" />
        </div>

        <button type="submit" className="btn btn-primary">Kaydol</button>
      </form>
    </div>
  );
}

export default Register;
