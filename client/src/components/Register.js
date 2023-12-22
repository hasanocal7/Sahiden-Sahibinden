import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../style/Register.css';

function Register() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      try {
        // API endpoint'inize POST isteği gönderin
        const response = await axios.post('https://sahiden-sahibinden-production.up.railway.app/api/signup', values);

        // Yanıtı gerektiği gibi işleyin
        console.log('Yanıt:', response.data);

        // Başarılı bir gönderimden sonra formu sıfırlayın
        actions.resetForm();
      } catch (error) {
        // Hataları işleyin
        console.error('Hata:', error);
      }
    },
  });

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

        <div className="mb-3">
          <label htmlFor="password" className="password"></label>
          <input
            type="password"
            className="registerFormControl form-control"
            id="password"
            placeholder="Şifreniz"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="registerButton btn btn-primary">
          Hesap Aç
        </button>
      </form>
    </div>
  );
}

export default Register;
