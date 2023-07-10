import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const RouteGuard = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn); // Assuming you have a state indicating the user's authentication status
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default RouteGuard;
