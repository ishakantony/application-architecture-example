import React from "react";
import { Card, Button, Col, Form, ListGroup } from "react-bootstrap";

export default function Ticket() {
  return (
    <Card style={{ width: "32rem" }} className="my-2">
      <Card.Header>
        <h4>Ticket Subject</h4>
        <small>Ticket Owner</small>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h4>Comments</h4>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Form>
          <Form.Row>
            <Col md="8">
              <Form.Control placeholder="Enter comment" />
            </Col>
            <Col md="4">
              <Button variant="primary" type="submit">
                Add Comment
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Footer>
    </Card>
  );
}
