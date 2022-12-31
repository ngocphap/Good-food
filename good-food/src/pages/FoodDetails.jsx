import React, { useState, useEffect } from "react";

import { products } from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";
import productImg from "../assets/images/category-01.png";
import ProductCard from "../components/UI/product-card/ProductCard";
import Comments from "../components/UI/comments/Comments";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images ">
                <div
                  className="img_item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img_item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img_item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product_main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single_product-content">
                <h2 className="product_title mb-3">{title}</h2>
                <p className="product_price">
                  {" "}
                  Giá:{" "}
                  <span>
                    {" "}
                    {new Intl.NumberFormat().format(price) + ",000đ"}
                  </span>
                </p>
                <p className="category mb-5">
                  Loại: <span>{category}</span>
                </p>

                <Button onClick={addItem} className="bg-success">
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab_active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Miêu tả
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab_active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Đánh giá
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form mb-3">
                  {/* <div className="review pt-5">
                    <p className="user_name mb-0">Nguyễn văn A</p>
                    <p className="user_email">NVA@gmail.com</p>
                    <p className="feedback_text">Ngon tuyệt</p>
                  </div>

                  <div className="review">
                    <p className="user_name mb-0">Nguyễn Văn B</p>
                    <p className="user_email">NVB@gmail.com</p>
                    <p className="feedback_text">Wow</p>
                  </div>

                  <div className="review">
                    <p className="user_name mb-0">Nguyễn Văn C</p>
                    <p className="user_email">NVC@gmail.com</p>
                    <p className="feedback_text">pizzza</p>
                  </div> */}
                  <Comments
                    // commentsUrl="http://localhost:3004/comments"
                    currentUserId="1"
                  />
                  {/* <form className="form" onSubmit={submitHandler}>
                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Nhập tên của bạn"
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_group">
                      <input
                        type="text"
                        placeholder="Nhập Email"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Viết đánh giá"
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="addTOCart_btn">
                      Đăng
                    </button>
                  </form> */}
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related_Product-title">Những món tương tự</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
