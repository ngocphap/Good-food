import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Table,
} from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";
import { cartActions } from "../store/shopping-cart/cartSlice";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Thông tin nhận hàng</h6>
              <Form className="checkout_form">
                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Nhập Email"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="number"
                    placeholder="Số diendj thoại"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Tỉnh thành"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Quận huyện"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </FormGroup>
                <button type="submit" className="addTOCart_btn">
                  Payment
                </button>
              </Form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout_bill">
                <Table className=" ">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Tên</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </Table>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Total Qty: <span>{totalQty}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout_total pb-5">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total Cost: <span>${totalAmount}</span>
                  </h5>
                </div>
                <Button color="success" className="buy_btn auth_btn w-100">
                  Đặt hàng
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart_img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">${price}</td>
    </tr>
  );
};
export default Checkout;
