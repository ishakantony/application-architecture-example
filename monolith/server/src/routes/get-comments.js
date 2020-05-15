const express = require("express");

const router = express.Router();

const { COMMENTS } = require("../data/comments");
const { TICKETS } = require("../data/tickets");

router.get("/api/tickets/:id/comments", (req, res) => {
  const ticket = TICKETS[req.params.id];

  if (!ticket) {
    res.sendStatus(404);
    return;
  }

  const comments = COMMENTS.filter((c) => c.ticketId === ticket.id);

  console.log(`Got ${comments} comments for ticket (${ticket.id})`);

  res.send({
    comments,
  });
});

exports.getCommentsRoute = router;
