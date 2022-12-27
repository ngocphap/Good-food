import React from "react";
import { Button, Col, ListGroupItem, Row } from "reactstrap";

import { motion } from "framer-motion";
import "../../UI/cart/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 ">
      <Row className="cart_item mx-md-2 ">
        <Col xs="4" className="p-0">
          <img
            src={image01}
            alt=""
            className="w-100 d-flex justify-content-center align-items-center text-center img_cart"
          />
        </Col>
        <Col xs="6">
          <h6 className="cart_product-title mt-2">{title}</h6>
          <p className=" d-flex align-items-center gap-5 cart_product-price">
            {quantity}x{" "}
            <span>{new Intl.NumberFormat().format(totalPrice) + ",000đ"}</span>
          </p>
          <div className=" d-flex align-items-center justify-content-between increase_decrease-btn gap-2">
            <Button className="decrease_btn bg-success" onClick={decreaseItem}>
              <i class="ri-subtract-line text-bg-success fs-6"></i>
            </Button>

            <div className="quantity text-center justify-content-center align-items-center d-flex">
              {quantity}
            </div>
            <Button className="increase_btn bg-success" onClick={incrementItem}>
              <i class="ri-add-line text-bg-success fs-6"></i>
            </Button>
          </div>
        </Col>
        <Col
          xs="2"
          className="d-flex justify-content-center align-items-center"
        >
          <Button className="delete_btn bg-danger" onClick={deleteItem}>
            <i class="ri-close-line fs-6"></i>
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CartItem;
