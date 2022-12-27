import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.png";

import "../Footer/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="4">
            <div className=" footer_logo text-start">
              <img src={logo} alt="" />
            </div>
          </Col>

          <Col lg="4" md="4" sm="4">
            <h5 className="footer_title">Thời gian làm việc</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Thứ 2 - Thứ 7</span>
                <p>7:00am - 10:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Chủ Nhật</span>
                <p>9:00am-10:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="4" md="4" sm="4">
            <h5 className="footer_title">Thông tin liên hệ</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <p>Đia chỉ: Đường ABC, Thành phố Thủ Đức, Việt Nam</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>SĐT: 076123456</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery_time-item border-0 ps-0">
                <span>Email: Foodgood@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className=" d-flex justify-content-md-end text-md-end justify-content-center text-center ">
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-md-end gap-4 justify-content-md-end justify-content-center text-center">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="/fb">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="/github">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" /youtube">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" /linked">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
