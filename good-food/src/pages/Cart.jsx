import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Giỏ hàng" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Giỏ hàng chưa có Món ăn</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Ảnh</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Tổng tiền:
                  <span className="cart_subtotal">
                    {" "}
                    {new Intl.NumberFormat().format(totalAmount) + ",000đ"}
                  </span>
                </h6>
                <p>Thuế và vận chuyển sẽ được tính khi thanh toán</p>
                <div className="cart_page-btn">
                  <Button className="bg-success me-4">
                    <Link to="/foods">Tiếp tục đặt hàng</Link>
                  </Button>
                  <Button className="bg-danger">
                    <Link to="/checkout">Thanh toán</Link>
                  </Button>
                </div>
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
      <td className="text-center">
        {new Intl.NumberFormat().format(price) + ",000đ"}
      </td>
      <td className="text-center">{quantity}</td>
      <td className="text-center ">
        <Button className="bg-danger border-0 w-100 ">
          <i class="ri-delete-bin-line fs-6 " onClick={deleteItem}></i>
        </Button>
      </td>
    </tr>
  );
};

export default Cart;
