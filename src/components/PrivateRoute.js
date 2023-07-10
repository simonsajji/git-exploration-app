import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);// Assuming you have a state indicating the user's authentication status
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;