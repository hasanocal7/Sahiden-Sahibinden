import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Login.css";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
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
    <div
      className="loginContainer container mt-5 d-flex flex-column align-items-center"
      style={{ height: "70vh" }}
    >
      <h1 className="form-title mb-4">Giriş Yap</h1>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="loginİnputs mb-3">
          <label htmlFor="email" className="form-label">
           
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="E-posta giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="invalid-feedback">{errors.email}</p>}

          <label htmlFor="password" className="form-label">
           
          </label>
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Şifre giriniz"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="invalid-feedback">{errors.password}</p>
          )}
        </div>

        <button type="submit" className="loginButton btn ">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;
