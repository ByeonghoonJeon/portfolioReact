import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import portfolioList from "../shared/portfolio.js";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
} from "reactstrap";

const CardRender = ({ portfolioList }) => {
  return (
    <div>
      <Card className="shadow1">
        <CardImg
          className="bc"
          top
          src={portfolioList.image}
          alt={portfolioList.name}
        />
        <CardBody className="bc">
          <CardTitle className="font1" tag="h5">
            {portfolioList.title}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {portfolioList.subtitle}
          </CardSubtitle>
          <CardText className="font1">{portfolioList.description}</CardText>
          <Button>To the web</Button>
        </CardBody>
      </Card>
    </div>
  );
};

function Gallery() {
  const cardMaking = portfolioList.map((portfolioList) => {
    return (
      <div key={portfolioList.id} className="col-md-3 m-1">
        <CardRender className="cards" portfolioList={portfolioList} />
      </div>
    );
  });
  return (
    <div>
      <Header />
      <Row className="cards">{cardMaking}</Row>
      <Footer />
    </div>
  );
}

export default Gallery;
