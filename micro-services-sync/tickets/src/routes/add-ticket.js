const express = require("express");
const { randomBytes } = require("crypto");

const router = express.Router();

const { TICKETS } = require("../data/tickets");

router.post("/api/tickets", (req, res) => {
  const { name, subject, description } = req.body;
  const id = randomBytes(4).toString("hex");

  const ticket = {
    id,
    name,
    subject,
    description,
  };

  TICKETS[id] = ticket;

  console.log(`Ticket created (${id})`);

  res.send(ticket);
});

exports.addTicketRoute = router;
