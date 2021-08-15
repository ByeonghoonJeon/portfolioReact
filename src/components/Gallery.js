import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import portfolioList from "../shared/portfolio.js";
import { Link } from "react-router-dom";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

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
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card className="shadow1 cardHover">
          <a href={portfolioList.address} target="_blank">
            <CardImg
              top
              src={portfolioList.image}
              alt={portfolioList.category}
            />
          </a>
          <CardBody>
            <CardTitle className="font1" tag="h5">
              {portfolioList.category}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {portfolioList.description}
            </CardSubtitle>
            <CardText className="font1">{portfolioList.subtitle}</CardText>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {portfolioList.languages}
            </CardSubtitle>
            <a href={portfolioList.address} target="_blank">
              <Button>To the web</Button>
            </a>
          </CardBody>
        </Card>
        <br />
      </FadeTransform>
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
      <h1 className="python">
        <a
          href="https://github.com/ByeonghoonJeon"
          className="link"
          target="_blank"
        >
          [[ Click here to python program portfolio ]]
        </a>
      </h1>
      <Row className="cards">{cardMaking}</Row>
      <Footer />
    </div>
  );
}

export default Gallery;
