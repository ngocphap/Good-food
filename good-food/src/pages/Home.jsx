import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  CardGroup,
} from "reactstrap";

import heroImg from "../assets/images/banner.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/Quick-delivery.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/delivery_1.png";

// import networkImg from "../assets/images/network.png";
// import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import FoodPopular from "../components/UI/food-popular/FoodPopular.jsx";

// import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Vận chuyển nhanh",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Món ăn đến đúng giờ",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Dễ dàng lựa chọn",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  // su dung useState va useEffect de tim va load san pham
  // const [category, setCategory] = useState("ALL");
  // const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    // lay 4 thanh phan dau trong chuoi
    const slicePizza = filteredPizza.slice(0, 4);
    console.log(filteredPizza);
    console.log(slicePizza);
    setHotPizza(slicePizza);
  }, []);

  return (
    <Helmet title="Home">
      <section className="bg-white">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content   ">
                <h5 className="mb-3">Đặt đồ ăn có ngay lập tức !</h5>
                <h1 className="mb-4 hero_title">
                  <span>BẠN THÈM PIZZA</span> chỉ cần đợi <br />
                  <span> Ngay cửa nhà bạn ! </span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    <a href="#menu_popular" className="d-flex text-center">
                      Đặt hàng ngay <i class="ri-arrow-right-s-line "></i>
                    </a>
                  </button>

                  <button className="all_foods-btn">
                    <Link to="/foods" className="d-flex text-center">
                      Xem tất cả đồ ăn <i class="ri-arrow-right-s-line"></i>
                    </Link>
                  </button>
                </div>

                <div className=" hero_service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping_icon">
                      <i class="ri-car-line"></i>
                    </span>
                    Miễn phí giao hàng
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% An toàn khi thanh toán
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* category */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center mb-5">Thực đơn của chúng tôi</h2>
              <Category />
            </Col>
          </Row>
        </Container>
      </section>

      {/* cart item */}

      <FoodPopular />
      {/* hot pizza */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Pizza được mua nhiều nhất</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col md="4" xs="6" sm="6" lg="3" className="mt-5" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* why img */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why_tasty-treat">
                <h2 className="tasty_treat-title mb-4">
                  Tại sao <span>chọn chúng tôi</span>
                </h2>
                <p className="tasty_treat-desc"></p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Nhanh nhất
                    </p>
                    <p className="choose_us-desc">
                      GoodFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị
                      trường.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Dễ dàng nhất
                    </p>
                    <p className="choose_us-desc">
                      Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm
                      nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc
                      tải xuống siêu ứng dụng Grab của chúng tôi để có trải
                      nghiệm nhanh hơn và thú vị hơn
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Đáp ứng mọi nhu cầu
                    </p>
                    <p className="choose_us-desc">
                      Từ món ăn đặc sản địa phương đến các nhà hàng được ưa
                      thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài
                      lòng khẩu vị của bạn.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* text category */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">Cách chúng tôi phục vụ</h5>
              <h2 className="feature_title">Chỉ cần bạn đợi ở nhà </h2>
              <h2 className="feature_title">
                chúng tôi sẽ <span>Tới ngay</span>
              </h2>
            </Col>
            {/* feature item */}
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature_item text-center p-4">
                  <img src={item.imgUrl} alt="" className="w-25 mb-3" />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
