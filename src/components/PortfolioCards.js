import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardImg top src={props.image} alt={props.name} />
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.subtitle}
          </CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button>To the web</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
