import React from 'react';
import { FormControl } from 'react-bootstrap';
import "./Shipping.css";

const Shipping = () => {
    return (
        <div className="container mt-5">   
            <div className="row">

           <div className="col col-12 col-md-7 col-lg-7 shippingDetails">
               <h5 className="text-start">Edit Delevery Details</h5>
               <div className="bg-dark"> <hr/> </div>
            <FormControl type="name" placeholder="Full Name" className="w-100 my-3" />
            <FormControl type="name" placeholder="Delevery Method" className="w-100 my-3" />
            <FormControl type="name" placeholder="Address" className="w-100 my-3" />
            <FormControl type="name" placeholder="Flat, Suit Or Floor" className="w-100 my-3" />
            <FormControl type="name" placeholder="Phone Number" className="w-100 my-3" />
            <button className="btn btn-danger container-fluid mb-2">Save & Continue</button>
          </div>

          <div className="col col-12 col-md-5 col-lg-5 mt-5">
            
            <div className="text-start ms-4">
            <p>From <span className="fw-bold">Restaurant Address</span> </p>
            <p>Arriving In <span className="fw-bold">20-30</span> Minutes</p>
            <p><span className="fw-bold">Buyer Address</span></p>
            </div>

            <div className="container">
            <div className="card mb-3 cart-info">
            <div className="row">
            <div className="col col-5 col-lg-5 col-md-5">
            <img src="https://i.ibb.co/GWrgtsc/breakfast1.png" className="img-fluid w-75 p-2" alt=""/>
            </div>
            <div className="col col-7 col-md-7 col-lg-7 d-flex align-items-center text-start">
                   <div>
                      <p className="fw-bold mb-0">Eggs Benedict</p>
                      <p className="text-danger fw-bold mb-0">{8.99}$</p>
                      <p className="text-secondary mb-0"><small>Delevery Fee {2}$</small></p>
                      <p className="text-secondary mb-0"><small>Quantity {2}x</small></p>
                   </div>
            </div>
            </div>
            </div>
            </div>

            <div className="container">
            <div className="card mb-3 cart-info">
            <div className="row">
            <div className="col col-5 col-lg-5 col-md-5">
            <img src="https://i.ibb.co/F3f1DtD/breakfast4.png" className="img-fluid w-75 p-2" alt=""/>
            </div>
            <div className="col col-7 col-md-7 col-lg-7 d-flex align-items-center text-start">
                   <div>
                      <p className="fw-bold mb-0">Bagel And Cream Cheese</p>
                      <p className="text-danger fw-bold mb-0">{6.99}$</p>
                      <p className="text-secondary mb-0"><small>Delevery Fee {2}$</small></p>
                      <p className="text-secondary mb-0"><small>Quantity {1}x</small></p>
                   </div>
            </div>
            </div>
            </div>
            </div>
          
            <table className="table text-start">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th>Total Item:</th>
                <td><i className="fas fa-cart-plus"> </i> <span id="total-Products">  3</span></td>
              </tr>

              <tr>
                <th>Total Price :</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price"> 15.98</span></td>
              </tr>

              <tr>
                <th>Delevery Fee :</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price"> 4</span></td>
              </tr>

              <tr>
                <th>Total Price :</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price"> 4</span></td>
              </tr>

            </tbody>
          </table>
          <button className="btn btn-secondary fw-bold container-fluid mb-2">Place Order</button>
          </div>
          </div>
        </div>
    );
};

export default Shipping;