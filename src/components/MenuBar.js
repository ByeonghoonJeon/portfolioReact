import React from "react";

import { Container, Col, Row } from "reactstrap";

const MenuBar = (props) => {
  return (
    <div>
      <h2 className="title">Nathan Jeon</h2>
      <p className="secondTitle">Explore his interesting portfolio</p>
      <Container>
        <Row>
          <Col xs={6}>Gallery</Col>
          <Col xs={6}>Github</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuBar;
