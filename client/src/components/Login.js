<<<<<<< HEAD
// Login.js

import React from 'react';
import '../style/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import React, { useState } from "react";
import { useFormik } from "formik";
import {basicSchema  } from "../schemas";
import "../style/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000); //bu kısım anlaşılmadı
  });
  actions.resetForm();
};
>>>>>>> cef80eac94b62fffe382bb83cca31f68f00a9e47
function Login() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div>
<<<<<<< HEAD
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
=======
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              // className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email giriniz"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? "form-control " : ""}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              // className="form-control"
              id="password"
              placeholder="Şİfre giriniz"
              value={values.password}
              onChange={handleChange}
              className={errors.password ? "form-control" : ""}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="btn btn-primary">
            Giriş Yap
          </button>
>>>>>>> cef80eac94b62fffe382bb83cca31f68f00a9e47
        </div>
      </form>
    </div>
  );
}

export default Login;
