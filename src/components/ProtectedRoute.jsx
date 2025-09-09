import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
/*
The REPLACE prop ensures React Router replaces the current entry in the browser’s history stack instead of pushing a new one.
This prevents the user from clicking the back button and returning to the protected page after being redirected.
 */
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
