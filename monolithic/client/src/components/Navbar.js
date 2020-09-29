import axios from 'axios'
import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import logo from '../logo.svg'

const TICKETS = [
  {
    name: 'Ishak',
    subject: 'Slow Internet',
    description: 'My internet is very slow since last Sunday',
    comments: [
      'Have you tried to restart your modem?',
      'Yes, so far no effect',
      "Okay, we'll send you a technician soon",
    ],
  },
  {
    name: 'Antony',
    subject: 'Unclear voice on the telephone',
    description:
      "When i made an international phone call, the voice wasn't clear.",
    comments: ['Hi, is there any update on this?'],
  },
  {
    name: 'Darmawan',
    subject: 'No Signal',
    description: 'My phone has no signal since last week',
    comments: [],
  },
]

export default () => {
  async function populateTickets(e) {
    e.preventDefault()

    TICKETS.forEach(async ({ name, subject, description, comments }) => {
      try {
        const response = await axios.post('http://localhost:4000/api/tickets', {
          name,
          subject,
          description,
        })

        const { id } = response.data

        comments.forEach(async (comment) => {
          try {
            await axios.post(
              `http://localhost:4000/api/tickets/${id}/comments`,
              {
                comment,
              }
            )
          } catch (err) {
            console.error(err)
          }
        })
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Example Monolith Trouble Ticket App
      </Navbar.Brand>
      <Button className="ml-auto" onClick={populateTickets} variant="primary">
        Populate
      </Button>
    </Navbar>
  )
}
