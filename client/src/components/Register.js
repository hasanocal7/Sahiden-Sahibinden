import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import axios from 'axios';
import '../style/Register.css';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      try {
        const response = await axios.post('https://sahiden-sahibinden-production.up.railway.app/api/signup', values);
       
        console.log('Kullanıcı Hesabı Açıldı:', response.data);
        actions.resetForm();
        navigate('/');
      } catch (error) {
        console.error('Hata:', error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registerContainer container mt-5 d-flex flex-column align-items-center ">
      <h2 className="register-heading">Sahiden</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            name="email"
            className={`registerFormControl form-control`}
            placeholder="E-posta giriniz"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="first_name" className="form-label"></label>
          <input
            type="text"
            className="registerFormControl form-control"
            id="first_name"
            name="first_name"
            placeholder="Adınız"
            value={values.first_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label"></label>
          <input
            type="text"
            className="registerFormControl form-control"
            id="last_name"
            name="last_name"
            placeholder="Soyadınız"
            value={values.last_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 password-container">
          <label htmlFor="password" className="password"></label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="registerFormControl form-control"
              id="password"
              placeholder="Şifreniz"
              value={values.password}
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
        </div>
        <div className="registerLink">
          <p className='hesapRegister'>
            Hesabın var mı <a href="/login">Giriş Yap!</a>
          </p>
        </div>
        <button type="submit" className="registerButton btn btn-primary">
          Hesap Aç
        </button>
      </form>
    </div>
  );
}

export default Register;
