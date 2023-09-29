// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux to access the authentication state

// Create a PrivateRoute component that checks if the user is authenticated
const PrivateRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth); // Replace 'auth' with your actual Redux slice name for authentication

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
