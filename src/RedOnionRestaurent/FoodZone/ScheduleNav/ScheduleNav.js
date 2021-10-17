import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./ScheduleNav.css";

const ScheduleNav = () => {

    const activeStyle = {
        color: "red",
        paddingBottom: "3px",
        borderBottom: "3px solid red",
    }

    return (
        <Container className="mt-5 mb-5">
            <NavLink activeStyle={activeStyle} className="foodNavBar" to="/breakfast">Breakfast</NavLink>
            <NavLink activeStyle={activeStyle} className="foodNavBar" to="/lunch">Lunch</NavLink>
            <NavLink activeStyle={activeStyle} className="foodNavBar" to="/dinner">Dinner</NavLink>
        </Container>
    );
};

export default ScheduleNav;