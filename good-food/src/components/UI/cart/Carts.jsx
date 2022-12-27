import React from "react";

import { Button, Col, ListGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../cart/shopping-cart.css";
import EmptyCart from "../../../assets/images/EmptyCart.png";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart_container">
      <ListGroup className="cart">
        <div className="cart_close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart_item-list">
          {cartProducts.length === 0 ? (
            <div className="">
              <img src={EmptyCart} className="w-100" alt="" />
              <p className="ps-5">Không có Món ăn nào trong giỏ hàng của bạn</p>
            </div>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <Row className="cart_bottom d-flex align-items-center justify-content-md-between ">
          <Col md="7" sm="12" xs="12">
            <h6>
              Tổng tiền:
              <span>
                {new Intl.NumberFormat().format(totalAmount) + ",000đ"}
              </span>
            </h6>
          </Col>
          <Col md="5" sm="12" xs="12">
            <Button className="bg-light w-100 ">
              <Link to="/checkout" onClick={toggleCart}>
                <p className="fs-6 d-flex text-center justify-content-center align-items-center">
                  Thanh Toán
                </p>
              </Link>
            </Button>
          </Col>
        </Row>
      </ListGroup>
    </div>
  );
};

export default Carts;
