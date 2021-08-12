import React from "react";
import { Container, Col, Row } from "reactstrap";

const MenuBar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="menu" xs={6}>
            Gallery
          </Col>
          <Col className="menu" xs={6}>
            Github
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuBar;
