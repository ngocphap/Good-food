import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllFood from "../pages/AllFood";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

import FoodDetails from "../pages/FoodDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
