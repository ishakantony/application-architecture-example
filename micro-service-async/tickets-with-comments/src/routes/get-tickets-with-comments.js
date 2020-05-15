const express = require("express");

const router = express.Router();

const { TICKETS } = require("../data/tickets");

router.get("/api/tickets-with-comments", async (req, res) => {
  console.log(`Got ${Object.keys(TICKETS).length} tickets with comments`);

  res.send({
    tickets: TICKETS,
  });
});

exports.getTicketsWithCommentsRoute = router;
