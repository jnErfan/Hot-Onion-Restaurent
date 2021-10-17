import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className="mt-5" animation="border" variant="dark" />
    }
    return (
        <Route
        {...rest}
        render = {({location}) => 
        user ? children : <Redirect
        to = {{
            pathname : "/signin",
            state : {from: location}
        }}
        />
    }
        />
    );
};

export default PrivateRoute;
