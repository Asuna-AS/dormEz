import React from "react";
import { Button, Card } from "react-bootstrap";
function Card_({ img, title, text, buttonText }) {
  return (
    <Card style={{ width: "25rem" }} className="text-white bg-dark mt-4">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="info">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default Card_;
