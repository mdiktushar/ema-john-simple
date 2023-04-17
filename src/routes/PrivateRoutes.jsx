import React from "react";
import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <div>Loading.....</div>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={`/login`} state={{from: location}} replace />;
};

export default PrivateRoutes;
