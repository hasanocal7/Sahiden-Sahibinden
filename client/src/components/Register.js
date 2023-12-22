import React from 'react';
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Register.css";


const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};



function Register() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="registerContainer container mt-5 d-flex flex-column align-items-center ">
      <h2 className="register-heading">Sahiden</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label"></label>
          <input type="text" className="registerFormControl form-control" id="fullName" placeholder="Adınız ve soyadınız" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input type="email" 
         
        className={'registerFormControl form-control ${errors.email ? "is-invalid" : "" }'}
        placeholder= "E-posta giriniz"
          id="email" 
          value={values.email}
          onChange={handleChange}/>
             {errors.email && <p className="invalid-feedback ">{errors.email}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="password"></label>
          <input type="password" className="registerFormControl form-control" id="password" placeholder="Şifreniz" />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label"> </label>
          <input type="password" className="registerFormControl form-control" id="confirmPassword" placeholder="Şifrenizi tekrar girin" />
        </div>

        <button type="submit" className="registerButton btn btn-primary">Hesap Aç</button>
      </form>
    </div>
  );
}

export default Register;
