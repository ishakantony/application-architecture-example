const express = require("express");

const router = express.Router();

const { TICKETS } = require("../data/tickets");

router.get("/api/tickets", (req, res) => {
  console.log(`Got ${Object.keys(TICKETS).length} tickets`);

  res.send({
    tickets: TICKETS,
  });
});

exports.getTicketsRoute = router;
