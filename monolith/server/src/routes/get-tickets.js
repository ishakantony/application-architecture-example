const express = require("express");

const router = express.Router();

const { TICKETS } = require("../data/tickets");

router.get("/api/tickets", (req, res) => {
  res.send({
    tickets: TICKETS,
  });
});

exports.getTicketsRoute = router;
