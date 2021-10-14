import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Breakfast.css";

const Breakfast = () => {
    return (
        <div className="container">
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
  <Col>
      <Card className="border-0 breakfastCard mt-5 pt-2">
       <div>
       <Card.Img variant="top w-50" src="https://i.ibb.co/F3f1DtD/breakfast4.png" />
       </div>
        <Card.Body>
          <Card.Title>Bagel And Cream Cheese</Card.Title>
          <Card.Text>
            How We Dreame About Our Future
          </Card.Text>
          <h3>$6.99</h3>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    );
};

export default Breakfast;