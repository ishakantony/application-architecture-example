const express = require("express");
const { randomBytes } = require("crypto");

const router = express.Router();

const { COMMENTS } = require("../data/comments");

router.post("/api/tickets/:id/comments", (req, res) => {
  const { comment } = req.body;
  const id = randomBytes(4).toString("hex");

  const commentObj = {
    id,
    comment,
    ticketId: req.params.id,
  };

  COMMENTS.push(commentObj);

  console.log(`Comment created (${id}) for ticket (${req.params.id})`);

  res.send(commentObj);
});

exports.addCommentRoute = router;