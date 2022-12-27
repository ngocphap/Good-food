import React from "react";

import "../product-card/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

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
      <Card className="card_item">
        <Row className="">
          <Col xs="12" sm="12" className="contain_card_img">
            <Link to={`/foods/${id}`} className="">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={image01}
                alt=""
                className="w-100 img_card"
              />
            </Link>
          </Col>
        </Row>

        <CardBody className=" w-100">
          <Row>
            <Col xs="12" sm="12" className="contain_card_title">
              <Link to={`/foods/${id}`}>
                <h5 className="fs-6 title_card">{title}</h5>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
              xs="12"
              sm="12"
              className="d-flex justify-content-between text-center align-items-center"
            >
              <span className="text-danger">
                {new Intl.NumberFormat().format(price) + ",000đ"}
              </span>
              <Button className="px-2 px-lg-4  bg-success" onClick={addToCart}>
                <MdAddShoppingCart className="fs-5" />
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;
