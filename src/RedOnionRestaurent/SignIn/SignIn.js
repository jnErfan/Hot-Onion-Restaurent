import React from 'react';
import { FormControl } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./signIn.css";

const SignIn = () => {
    const {googleSignIn, setUser} = useAuth();
    const loaction = useLocation();
    const history = useHistory();
    const redirect = loaction.state?.from || "/";

    const googleSignInBtn = () => {
        googleSignIn()
       .then(result => {
            setUser(result.user);
            history.push(redirect);
        })
    }

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

          <div className="">
          <div className="bg-dark"><hr /></div>
          <button onClick={googleSignInBtn} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="" /></button>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/color/30/000000/github--v3.png" alt="" /></button>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" alt="" /></button>
          </div>

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