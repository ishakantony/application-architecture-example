import React, { useState } from "react";
import { Card, Button, Col, Form } from "react-bootstrap";
import axios from "axios";

import Comments from "./CommentsNoAPI";

export default function Ticket({
  ticketId,
  ticketName,
  ticketSubject,
  ticketDescription,
  ticketComments,
}) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!comment) {
      alert("Comment is required");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4000/api/tickets/${ticketId}/comments`,
        {
          comment,
        }
      );

      alert("Comment submitted");
    } catch (err) {
      console.error(err);
      alert(`Something went wrong with the server`);
    }
  };

  return (
    <Card style={{ width: "32rem" }} className="my-2">
      <Card.Header>
        <h4>{ticketSubject}</h4>
        <small>{ticketName}</small>
      </Card.Header>
      <Card.Body>
        <Card.Text>{ticketDescription}</Card.Text>
        <h4>Comments</h4>
        <Comments comments={ticketComments} />
      </Card.Body>
      <Card.Footer>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col md="8">
              <Form.Control
                placeholder="Enter comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
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
