import React from 'react';
import "./ConfirmOrder.css"

const ConfirmOrder = () => {
    return (
        <div className="container">
           <div className="row">

        <div className="col col-12 col-md-7 col-lg-7 shippingDetails">
               <div>
               <img src="https://i.ibb.co/68LQf0K/Take-Away-2.gif" className="deleveryBoy" alt="" />
               <h1 className="text-secondary fw-bold">ON THE WAY</h1>
               </div>
        </div>

        <div className="col col-12 col-md-5 col-lg-5 mt-5">
                <div className="orderLocation">
                    <div className="ms-4 p-2 text-start">
                    <img src="https://i.ibb.co/7KDy8Cr/Group-1151.png" className="w-25" alt="" />
                    </div>
                    <div className="container text-start">
                        <div className="bg-white rounded-3 p-3">
                        
                        <p className=""> <span className="fw-bold">Restaurent Location</span>
                            <br /> <small className="text-secondary">Gulshan GPR</small>
                        </p>

                        <div className="d-flex">
                        <i className="fas fa-circle text-danger"></i>
                        <hr className="w-50 mt-2 text-danger" />
                        <i className="far fa-dot-circle text-danger"></i>
                        </div>

                        <p className=""> <span className="fw-bold">Your Location</span>
                            <br /> <small className="text-secondary">107 Rd No 8</small>

                        </p> 

                        </div>
                        <div className="mt-3">
                            <h2>09:30</h2>
                            <p className="text-secondary">
                                Estimate Delevery Time
                            </p>
                        </div>

                        <div className="bg-white rounded-3 p-1">
                        <div className="row row-cols-2">
                        <div className="col-md-4">
                        <img className="w-75 img-fluid" src="https://i.ibb.co/7bT6PKd/Group-1152.png" alt="" />
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <div>
                            <p className="fw-bold mb-0">Erfan</p>
                            <p><small className="text-secondary">Your Rider</small></p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <button className="btn btn-danger fw-bold container-fluid mb-4 mb-2 mt-5">Contract</button>
                    </div>
                </div>
        </div>

           </div>
        </div>
    );
};

export default ConfirmOrder;