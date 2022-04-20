import React from "react";
import { Button, Card } from "react-bootstrap";
function Card_({ key, card}) {
  return (
    <Card style={{ width: "23rem" }} className="text-white bg-dark m-4">
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button variant="info">{card.buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default Card_;
