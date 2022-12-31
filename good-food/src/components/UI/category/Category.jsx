import React from "react";

import { Container, Row, Col, Card } from "reactstrap";

import "../category/category.css";

import { DatalistCategory } from "../../../assets/fake-data/products";

const Category = () => {
  return (
    <Container>
      <Row>
        {DatalistCategory.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <Card className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="" className="w-100" />
              </div>
              <h6 className="fs-5">{item.TitleCategory}</h6>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
