import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { useNavigate, Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
