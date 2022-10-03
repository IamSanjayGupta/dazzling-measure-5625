import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { data } = useSelector((store) => store.auth);
  if (!data.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
