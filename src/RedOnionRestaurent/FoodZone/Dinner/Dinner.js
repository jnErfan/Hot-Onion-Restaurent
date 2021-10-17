import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Dinner.css";

const Dinner = () => {
  const history = useHistory();
  const [dinners, setDinners] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jnErfan/Restaurant-Foods-Data/main/foodsData.json')
    .then(res => res.json())
    .then(data => setDinners(data.dinner))
  },[])

    return (
        <div className="container" id="dinner" >
             <Row xs={1} md={2} lg={3} className="g-4 mb-5">
             {
                dinners.map(dinner => 
                  
      <Col key={dinner.id}>
      <Card onClick={()=> history.push(`/fooddetails/${dinner.id}`)} className="border-0 breakfastCard mt-5 pt-2">
       <div>
       <Card.Img variant="top w-50" src={dinner.displayImg} />
       </div>
        <Card.Body>
          <Card.Title>{dinner.name}</Card.Title>
          <Card.Text>
            {dinner.details}
          </Card.Text>
          <h3>{dinner.price}$</h3>
        </Card.Body>
      </Card>
    </Col>
                  )
             }
              </Row>
        </div>
    );
};

export default Dinner;