import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Route, Router, Switch, Link } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";

const MenuBar = () => {
  return (
    <div>
      <Container>
        <Row className="menubar">
          <Col className="menu" xs={6}>
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </Col>
          <Col className="menu" xs={6}>
            <a
              href="https://github.com/ByeonghoonJeon"
              className="link"
              target="_blank"
            >
              Github
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuBar;
