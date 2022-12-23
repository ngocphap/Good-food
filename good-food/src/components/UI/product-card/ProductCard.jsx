import React from "react";

import "../product-card/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    //console.log("addtocard:" + addToCart);
  };

  return (
    <>
      <Card className="card_item ">
        <div className="product_img">
          <Link to={`/foods/${id}`}>
            <img src={image01} alt="product-img" className="" />
          </Link>
        </div>

        <CardBody className="product_content ">
          <h5 className="h-25">
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>

          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product_price">${price}</span>
            <button className="addTOCart_btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
