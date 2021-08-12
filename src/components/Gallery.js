import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./PortfolioCards";
import { PORTFOLIO } from "../shared/portfolio";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Gallery;
