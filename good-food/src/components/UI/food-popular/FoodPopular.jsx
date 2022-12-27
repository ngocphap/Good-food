import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";

// import "../styles/hero-section.css";

// import "../styles/home.css";
// import "../food-popular/foodPopular.css";
import products from "../../../assets/fake-data/products";

import foodCategoryImg01 from "../../../assets/images/hamburger.png";
import ProductCard from "../product-card/ProductCard";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const DatalistCategory = [
  {
    srcImg: foodCategoryImg01,
    nameCategory: "PIZZA",
    TitleCategory: "Pizza",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "PASTA",
    TitleCategory: "Mỳ Ý",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "SALAD",
    TitleCategory: "Salad Rau Trộn",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "RICE",
    TitleCategory: "Các loại cơm",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "WATER",
    TitleCategory: "Nước giải khát",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "BEER",
    TitleCategory: "Bia",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "BURGER",
    TitleCategory: "Hamburger",
  },
  {
    srcImg: foodCategoryImg01,
    nameCategory: "CHICKEN",
    TitleCategory: "Gà chiên xù",
  },
];

const FoodPopular = () => {
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

    if (category === "SALAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Salad"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PASTA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pasta"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "RICE") {
      const filteredProducts = products.filter(
        (item) => item.category === "Rice"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "CHICKEN") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chicken"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "WATER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Water"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "BEER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Beer"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 id="menu_popular">Món ăn Phổ biến</h2>
          </Col>

          <Col lg="12">
            <div className=" bg-body ">
              <Slider {...settings}>
                <Button
                  className={`all_btn d-flex align-items-center m-5 bg-danger gap-3 w-75 ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  <img src={foodCategoryImg01} className="" alt="" />
                  All
                </Button>
                {DatalistCategory.map((item, index) => (
                  <Button
                    className={`d-flex w-75 align-items-center m-5 bg-danger gap-3 ${
                      category === `${item.nameCategory}` ? "foodBtnActive" : ""
                    }`}
                    onClick={() => setCategory(`${item.nameCategory}`)}
                  >
                    <img src={item.srcImg} alt="" />
                    {item.TitleCategory}
                  </Button>
                ))}
              </Slider>
            </div>
          </Col>

          {/* <FoodPopular /> */}
          {/* product item card */}
          {allProducts.map((item) => (
            <Col md="4" xs="6" sm="6" lg="3" key={item.id} className="mt-5">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FoodPopular;
