import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Login.css";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Her değişiklikte hataları temizle
    setErrors({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios ile sunucuya istek gönderme
      const response = await axios.post('https://sahiden-sahibinden-production.up.railway.app/api/signin', formData);

      // Sunucudan dönen yanıtı kullanma
      console.log(response.data);

      // İsteğin başarılı olduğunu varsayalım, burada başka işlemler yapabilirsiniz.
    } catch (error) {
      // Hata durumunda burada işlemler yapabilirsiniz.
      console.error('Hata:', error);

      // Hataları işleyerek state'i güncelleyin
      setErrors({
        email: "Hata mesajı",
        password: "Hata mesajı",
      });
    }
  };

  return (
    <div className="loginContainer container mt-5 d-flex flex-column align-items-center">
      <h1 className="loginFormTitle form-title mb-4">Sahiden</h1>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="loginInputs mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            id="email"
            className={`loginFormControl form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="E-posta giriniz"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="invalid-feedback ">{errors.email}</p>}

          <label htmlFor="password" className="form-label"></label>
          <input
            type="password"
            id="password"
            className={`loginFormControl form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Şifre giriniz"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="invalid-feedback">{errors.password}</p>
          )}
        </div>

        <div className="forgotPasswordLink">
          <a href="/forgot-password" className="forgotPasswordLink">
            Şifremi Unuttum
          </a>
        </div>

        <div>
          <button type="submit" className="loginButton btn">
            Giriş Yap
          </button>
        </div>

        <div className="signupLink">
          <p>Hesabın yok mu? <a href="/signup">Hemen kaydol!</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
