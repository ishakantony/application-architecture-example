import React, { useState } from "react";
import axios from "axios";
import { Col, Card, Button, Form, Alert } from "react-bootstrap";

export default () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !subject || !description) {
      setErrorMessage(
        `Name, Subject and Description are <strong>mandatory</strong>`
      );
      setShowError(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/tickets", {
        name,
        subject,
        description,
      });

      alert("Ticket submitted");
    } catch (err) {
      console.error(err);
      setErrorMessage(`Something went wrong with the server`);
      setShowError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <Card.Header>Add Trouble Ticket</Card.Header>
        <Card.Body>
          {showError && (
            <Alert
              variant="danger"
              onClose={() => setShowError(false)}
              dismissible
            >
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>{errorMessage}</p>
            </Alert>
          )}
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button variant="primary" type="submit">
            Submit Ticket
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};
