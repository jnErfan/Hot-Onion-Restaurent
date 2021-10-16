import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Dinner.css";

const Dinner = () => {
  const history = useHistory();

  const AddToCart = () => {
    history.push('/fooddetails')
  }
    return (
        <div className="container" id="dinner" >
             <Row xs={1} md={2} lg={3} className="g-4 mb-5">
  <Col>
      <Card onClick={AddToCart} className="border-0 breakfastCard mt-5 pt-2">
       <div>
       <Card.Img variant="top w-50" src="https://i.ibb.co/QQmbgRM/dinner6.png" />
       </div>
        <Card.Body>
          <Card.Title>Salmon With Grapefruit And Lentil Salad</Card.Title>
          <Card.Text>
            How We Dreame About Our Future
          </Card.Text>
          <h3>$9.99</h3>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default Dinner;