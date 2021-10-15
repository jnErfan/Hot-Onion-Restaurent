import React from 'react';
import { FormControl, Row, Button } from 'react-bootstrap';
import "./FoodDeatils.css";


const FoodDeatils = () => {
    return (
        <div className="container">
            <Row xm={1} md={2} lg={2}>

                <div>
            <h1 className="text-start">
            Healthy Meal Plan
            </h1>
            <p className="text-start">
            This hearty dinner, full of protein-packed lentils and heart-healthy salmon, takes only 15 minutes to cook.
            </p>
            <div className="d-flex align-items-center">
              <div>
              <h2 className="me-4">
                    $23.99
                </h2>
              </div>
                <div className="d-flex rounded-pill border quantityButton py-1">
            <button className="border-0 bg-transparent ps-3"> <i className="fas fa-minus"></i> </button>
            <FormControl className="border-0 inputField"  type="number" />
            <button className="border-0 bg-transparent"> <i className="fas fa-plus text-danger"></i> </button>
                </div>
            </div>
            <div className="text-start ms-4 mt-3">
            <Button variant="btn btn-danger searchbutton py-1 px-3 rounded-pill"><i className="fas fa-shopping-cart"></i> Add</Button>


<div id="carouselExampleControls" className="carousel slide mt-5 carouselContainer" data-bs-ride="carousel">
  <div className="carousel-inner pe-5">

    <div className="carousel-item active">
        <div class="row">
            <div class="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
            <img src="https://i.ibb.co/PFXKLPS/lunch4.png" className="d-block w-100" alt=""/>
            </div>
            <div class="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
            <img src="https://i.ibb.co/MpfsRdw/lunch3.png" className="d-block w-100" alt=""/>
            </div>
        </div>
    </div>
        
    <div className="carousel-item">
        <div class="row">
            <div class="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
            <img src="https://i.ibb.co/Tmj7RNb/lunch2.png" className="d-block w-100" alt=""/>
            </div>
            <div class="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
            <img src="https://i.ibb.co/4Pjs48k/lunch5.png" className="d-block w-100" alt=""/>
            </div>
        </div>
    </div>

  </div>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="fas fa-chevron-right text-dark fs-3 ms-4" aria-hidden="true"></span>
  </button>
</div>
            </div>
                </div>
            
            {/* Row 2  */}
                <div>
                <div>
                    <img className="w-75" src="https://i.ibb.co/t3NH6mq/lunch6.png" alt="" />
                </div>
                </div>

            </Row>
        </div>
    );
};

export default FoodDeatils;