import React, { useEffect, useState } from 'react';
import "./Lunch.css";
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Lunch = () => {
  const history = useHistory();
  const [lunchs, setLunchs] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jnErfan/Restaurant-Foods-Data/main/foodsData.json')
    .then(res => res.json())
    .then(data => setLunchs(data.lunch))
  },[])

    return (
        <div className="container" id="lunch">
 <Row xs={1} md={2} lg={3} className="g-4 mb-5">
             {
                lunchs.map(lunch => 
       <Col key={lunch.id}>
      <Card onClick={()=> history.push(`/fooddetails/${lunch.id}`)} className="border-0 breakfastCard mt-5 pt-2">
       <div>
       <Card.Img variant="top w-50" src={lunch.displayImg} />
       </div>
        <Card.Body>
          <Card.Title>{lunch.name}</Card.Title>
          <Card.Text>
            {lunch.details}
          </Card.Text>
          <h3>{lunch.price}$</h3>
        </Card.Body>
      </Card>
    </Col>
                          )
             }
</Row>
        </div>
    );
};

export default Lunch;