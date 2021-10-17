import React, { useEffect, useState } from 'react';
import { FormControl, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import "./FoodDeatils.css";


const FoodDeatils = () => {

    const history = useHistory();
    const {foodId} = useParams();
    const orderShipping = () => {
      history.push('/shipping')
    }


    const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jnErfan/Restaurant-Foods-Data/main/foodDetailsData.json')
    .then(res => res.json())
    .then(data => setFoodDetails(data))
  },[]) 

   const foodDetail = foodDetails.find(foodDetail => foodDetail?.id === foodId)

   console.log(foodDetail);

    return (
        <div className="container">
          
          <Row xm={1} md={2} lg={2}>
                <div>
            <h1 className="text-start">
            {foodDetail?.name}
            </h1>
            <p className="text-start">
            {foodDetail?.discription}
            </p>
            <div className="d-flex align-items-center">
              <div>
              <h2 className="me-4">
                    {foodDetail?.price}$
                </h2>
              </div>
                <div className="d-flex rounded-pill border quantityButton py-1">
            <button className="border-0 bg-transparent ps-3"> <i className="fas fa-minus"></i> </button>
            <FormControl className="border-0 inputField fw-bold" defaultValue={1}  type="number" />
            <button className="border-0 bg-transparent"> <i className="fas fa-plus text-danger"></i> </button>
                </div>
            </div>
            <div className="text-start ms-4 mt-3">
            <Button onClick={orderShipping} variant="btn btn-danger searchbutton py-1 px-3 rounded-pill"><i className="fas fa-shopping-cart"></i> Add</Button>


<div id="carouselExampleControls" className="carousel slide mt-5 carouselContainer" data-bs-ride="carousel">
  <div className="carousel-inner pe-5">

    <div className="carousel-item active">
        <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
            <img src={foodDetail?.displayImg} className="d-block w-100" alt=""/>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-center">
            <img src={foodDetail?.img1} className="d-block w-100" alt=""/>
            </div>
        </div>
    </div>
        
    <div className="carousel-item">
        <div className="row">
            <div className="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
            <img src={foodDetail?.img2} className="d-block w-100" alt=""/>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
            <img src={foodDetail?.img3} className="d-block w-100" alt=""/>
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
                    <img className="w-75" src={foodDetail?.displayImg} alt="" />
                </div>
                </div>
            </Row>
        </div>
    );
};

export default FoodDeatils;