import React from 'react';
import { FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./signIn.css";

const SignIn = () => {
    return (
        <div className="formContainer my-5" id="signin" >
        <div className="container">
            <div>
                <img className="w-25 py-3" src="https://i.ibb.co/PhHBD5V/logo2.png" alt="" />
            </div>
        <div className="row">
           <div className="col col-12 col-md-6 col-lg-6">
          <FormControl type="name" placeholder="Name" className="w-100 my-3" />
            <FormControl type="email" placeholder="Email" className="w-100 my-3" />
            <FormControl type="password" placeholder="Password" className="w-100 my-3" />
            <FormControl type="password" placeholder="Confirm Password" className="w-100 my-3" />
            <button className="btn btn-danger container-fluid mb-2">SIGN IN</button>
          <p>Already Sign In ? <NavLink className="text-danger" to="/login">Login</NavLink></p> 
          </div>
          <div className="col col-12 col-md-6 col-lg-6">
              <img className="w-100" src="https://i.ibb.co/ZKN0yG0/undraw-Access-account-re-8spm-1-1.png" alt="" />
          </div>
        </div>
        </div>
        </div>
    );
};

export default SignIn;