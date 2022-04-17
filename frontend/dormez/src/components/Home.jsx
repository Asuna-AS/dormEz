import React from "react";
import Card_ from "./Card_";
import { Card, Row, Col, Button } from "react-bootstrap";

function Home() {
  const arr = { btn: "text in array" };
  return (
    <div className="container">
      <Row md>
        <Col className="d-flex justify-content-center">
          <Card_
            img="https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="aa"
            text="bb"
            buttonText="cc"
          />
          <Card_
            img="https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="aa"
            text="bb"
            buttonText={arr["btn"]}
          />
          <Card_
            img="https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="aa"
            text="bb"
            buttonText="cc"
          />
        </Col>
      </Row>
      <Row md>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "25rem" }} className="text-white bg-dark mt-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Bathroom Booking</Card.Title>
              <Card.Text>
                Avoid waiting time at the bahroom by booking slots.
              </Card.Text>
              <Button variant="info">Book slot</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "25rem" }} className="text-white bg-dark mt-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />

            <Card.Body>
              <Card.Title>Washing Machine Booking</Card.Title>
              <Card.Text>
                Arrive at your booked time to use the washing machine.
              </Card.Text>
              <Button variant="info">Book slot</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "25rem" }} className="text-white bg-dark mt-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1528384541731-6606de53ddaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9zdCUyMGFuZCUyMGZvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Lost And Found</Card.Title>
              <Card.Text>
                Add entries for lost items or something you found that does not
                belong to you.
              </Card.Text>
              <Button variant="info">Lost And Found</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "25rem" }} className="text-white bg-dark mt-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Canteen Ordering</Card.Title>
              <Card.Text>
                Order food available in the night canteen and arrive when it is
                prepared.
              </Card.Text>
              <Button variant="info">Foodie Corner</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
