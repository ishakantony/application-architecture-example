const express = require("express");
const axios = require("axios");

const router = express.Router();

const { TICKETS } = require("../data/tickets");

router.get("/api/tickets-with-comments", async (req, res) => {
  const ticketsWithComments = TICKETS;

  for (const ticketId in ticketsWithComments) {
    try {
      const response = await axios.get(
        `http://localhost:4001/api/tickets/${ticketId}/comments`
      );
      ticketsWithComments[ticketId].comments = response.data.comments;

      console.log(
        `Got ${ticketsWithComments[ticketId].comments.length} comments from [comments-service] for ticket (${ticketId})`
      );
    } catch (err) {
      console.error(err);
      ticketsWithComments[ticketId].comments = [];
    }
  }

  console.log(`Got ${Object.keys(ticketsWithComments).length} tickets`);

  res.send({
    tickets: ticketsWithComments,
  });
});

exports.getTicketsWithCommentsRoute = router;
