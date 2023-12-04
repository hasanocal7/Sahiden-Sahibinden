import React, { useState } from 'react';
import '../style/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  return (
    <div>
      <form>
        <div className='container'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit" className="btn btn-primary">Giriş Yap</button>
        </div>
      </form>
      
    </div>
    
  );
}

export default Login;
