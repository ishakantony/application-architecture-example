const express = require("express");
const router = express.Router();

const { COMMENTS } = require("../data/comments");

router.get("/api/tickets/:id/comments", async (req, res) => {
  const comments = COMMENTS.filter((c) => c.ticketId === req.params.id);

  console.log(`Got ${comments.length} comments for ticket (${req.params.id})`);

  res.send({
    comments,
  });
});

exports.getCommentsRoute = router;
