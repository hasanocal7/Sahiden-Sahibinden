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
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email giriniz"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Şİfre giriniz"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
