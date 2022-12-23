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

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

// import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  // su dung useState va useEffect de tim va load san pham
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    // lay 4 thanh phan dau trong chuoi
    const slicePizza = filteredPizza.slice(0, 4);
    console.log(filteredPizza);
    console.log(slicePizza);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section className="bg-white">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content   ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero_title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all_foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero_service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping_icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
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
        <Category />
      </section>
      {/* text category */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                ab id officiis tenetur beatae recusandae labore animi quas
                distinctio vero magnam rem voluptatum excepturi accusamus,
                exercitationem laboriosam ipsam inventore. Voluptate.{""}
              </p>
              <p className="feature_text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
                expedita?
              </p>
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

      {/* cart item */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-5">
                <button
                  className={`all_btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {/* product item card */}
            {allProducts.map((item) => (
              <Col md="4" xs="6" sm="6" lg="3" key={item.id} className="mt-5">
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
                  Why <span>tasy treat?</span>
                </h2>
                <p className="tasty_treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore id optio deserunt voluptatibus, cumque consectetur
                  corrupti at, animi ut mollitia atque. Tempora corporis veniam
                  reiciendis unde magnam quisquam eos nesciunt!
                </p>

                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty food
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum, eaque!
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Quality support
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum, eaque!
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum, eaque!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* hot pizza */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col md="4" xs="6" sm="6" lg="3" className="mt-5" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*  network test motional img*/}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial_stitle mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
