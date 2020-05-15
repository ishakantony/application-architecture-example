import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./components/Navbar";
import AddTicket from "./components/AddTicket";
import Tickets from "./components/Tickets";

function App() {
  return (
    <>
      <Navbar />
      <Container className="p-3">
        <Row>
          <Col>
            <AddTicket />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex flex-wrap justify-content-between">
            <Tickets />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
