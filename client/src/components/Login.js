import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:
        e.target.id === "password" ? e.target.value.trim() : e.target.value,
    });

    setErrors({
      email: "",
      password: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/signin",
        formData
      );

      // Sunucudan dönen yanıtı kullanma
      const token = response.data.accessToken;

      // Token localStorage kayıt etme
      localStorage.setItem("token", token);

      // Başarılı giriş sonrasında anasayfaya yönlendirme
      navigate("/home");
    } catch (error) {
      console.error("Hata:", error);

      setErrors({
        email: "E-posta adresinizi doğru girdiğinizden emin olunuz.",
        password: "Şifrenizi giriniz.",
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
            className={`loginFormControl form-control ${
              errors.email ? "is-invalid" : ""
            }`}
            placeholder="E-posta giriniz"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="loginError invalid-feedback ">{errors.email}</p>
          )}

          <label htmlFor="password" className="form-label"></label>
          <div className="password-container input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`loginFormControl form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Şifre giriniz"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="password-toggle-btn btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
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
          <p>
            Hesabın yok mu? <a href="/register">Hemen kaydol!</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
