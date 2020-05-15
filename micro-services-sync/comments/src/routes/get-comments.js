const express = require("express");
const router = express.Router();

const { COMMENTS } = require("../data/comments");

router.get("/api/tickets/:id/comments", async (req, res) => {
  const comments = COMMENTS.filter((c) => c.ticketId === req.params.id);

  console.log(`Got ${comments} comments for ticket (${ticket.id})`);

  res.send({
    comments,
  });
});

exports.getCommentsRoute = router;
