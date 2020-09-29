import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddTicket from './components/AddTicket'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets'

// import Tickets from "./components/TicketsWithComments";

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
  )
}

export default App
