import React from 'react';
import "./Lunch.css";
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Lunch = () => {
  const history = useHistory();

  const AddToCart = () => {
    history.push('/fooddetails')
  }

    return (
        <div className="container" id="lunch">
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
  <Col>
      <Card onClick={AddToCart} className="border-0 breakfastCard mt-5 pt-2">
       <div>
       <Card.Img variant="top w-50" src="https://i.ibb.co/t3NH6mq/lunch6.png" />
       </div>
        <Card.Body>
          <Card.Title>Healthy Meal Plan</Card.Title>
          <Card.Text>
            How We Dreame About Our Future
          </Card.Text>
          <h3>$23.99</h3>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default Lunch;