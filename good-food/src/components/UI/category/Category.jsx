import React from "react";

import { Container, Row, Col, Card } from "reactstrap";

import Salad from "../../../assets/images/Salad_1.jpg";
import Pizza from "../../../assets/images/Pizza_1.jpg";
import Burger from "../../../assets/images/hamburger_1.jpg";
import Pasta from "../../../assets/images/Pasta.jpeg";
import Chicken from "../../../assets/images/Chicken_1.jpg";
import Rice from "../../../assets/images/Rice.jpeg";
import Water from "../../../assets/images/water.jpeg";
import Beer from "../../../assets/images/beer_demo_3.png";
import "../category/category.css";

const categoryData = [
  {
    display: "Pizza",
    imgUrl: Pizza,
  },
  {
    display: "Mỳ Ý",
    imgUrl: Pasta,
  },

  {
    display: "Salad Rau Trộn",
    imgUrl: Salad,
  },

  {
    display: "Các Loại Cơm",
    imgUrl: Rice,
  },

  {
    display: "Nước giải khát",
    imgUrl: Water,
  },

  {
    display: "Bia ",
    imgUrl: Beer,
  },

  {
    display: "Hamburger",
    imgUrl: Burger,
  },

  {
    display: "Gà Chiên Xù ",
    imgUrl: Chicken,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <Card className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="" className="w-100" />
              </div>
              <h6 className="fs-5">{item.display}</h6>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
