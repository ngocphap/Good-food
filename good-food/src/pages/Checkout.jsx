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
import useAuth from "../custom-hooks/useAuth";

const Checkout = () => {
  const [address, setAddress] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [numberSDT, setNumberSDT] = useState(0);

  const { currentUser } = useAuth();
  console.log(currentUser.numberSDT);
  const shippingInfo = [];

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: displayName,
      email: email,
      phone: numberSDT,
      address: address,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Thanh toán" />
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
                    value={currentUser.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    required
                    value={currentUser.displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    required
                    value={currentUser.numberSDT}
                    onChange={(e) => setNumberSDT(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormGroup>

                <Button type="submit" className="bg-danger">
                  Thanh toán
                </Button>
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
                  Tổng số lượng:
                  <span>{totalQty}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Tổng tiền:{" "}
                  <span>
                    {new Intl.NumberFormat().format(cartTotalAmount) + ",000đ"}
                    {}
                  </span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Phí vận chuyển:{" "}
                  <span>
                    {new Intl.NumberFormat().format(shippingCost) + ",000đ"}
                    {}
                  </span>
                </h6>
                <div className="checkout_total pb-5">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Tổng tiền:{" "}
                    <span>
                      {new Intl.NumberFormat().format(totalAmount) + ",000đ"}
                    </span>
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
      <td className="text-center">
        {" "}
        {new Intl.NumberFormat().format(price) + ",000đ"}
        {}
      </td>
    </tr>
  );
};
export default Checkout;
