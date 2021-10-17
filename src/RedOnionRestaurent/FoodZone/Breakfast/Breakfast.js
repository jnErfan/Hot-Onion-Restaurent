import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./Breakfast.css";

const Breakfast = () => {
const history = useHistory();

const [breakfasts, setBreakFasts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jnErfan/Restaurant-Foods-Data/main/foodsData.json')
    .then(res => res.json())
    .then(data => setBreakFasts(data.breakfast))
  },[])


    return (
        <div className="container" id="breakfast" >
         
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
            {
                breakfasts.map(breakfast =>  
  <Col key={breakfast.id}>
      <Card onClick={()=> history.push(`/fooddetails/${breakfast.id}`)} className="border-0 breakfastCard mt-5 pt-2">
       <div>
       <Card.Img variant="top w-50" src={breakfast.displayImg} />
       </div>
        <Card.Body>
          <Card.Title>{breakfast.name}</Card.Title>
          <Card.Text>
            {breakfast.details}
          </Card.Text>
          <h3>{breakfast.price}$</h3>
        </Card.Body>
      </Card>
    </Col>
    )
  } 
</Row>
        </div>
    );
};

export default Breakfast;