import React from 'react';
import { FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div id="login" className="formContainer my-5">
        <div className="container">
            <div>
                <img className="w-25 py-3" src="https://i.ibb.co/PhHBD5V/logo2.png" alt="" />
            </div>      
        <div className="row">
           <div className="col col-12 col-md-6 col-lg-6">
            <FormControl type="email" placeholder="Email" className="w-100 my-3" />
            <FormControl type="password" placeholder="Password" className="w-100 my-3" />
            <button className="btn btn-danger container-fluid mb-2">LOGIN</button>
            <p>New Here ? <NavLink className="text-danger" to="/signin">Sign In</NavLink></p>
          </div>
          <div className="col col-12 col-md-6 col-lg-6">
              <img className="w-100" src="https://i.ibb.co/6FdVmx8/undraw-Mobile-login-re-9ntv-3-1.png" alt="" />
          </div>
        </div>
        </div>
        </div>
    );
};

export default Login;