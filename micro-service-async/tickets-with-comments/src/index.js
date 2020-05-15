const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const {
  getTicketsWithCommentsRoute,
} = require("./routes/get-tickets-with-comments");

const { TICKETS } = require("./data/tickets");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getTicketsWithCommentsRoute);

const handleEvent = (type, data) => {
  if (type === "ADD_TICKET") {
    TICKETS[data.id] = data;
    TICKETS[data.id].comments = [];
  }

  if (type === "ADD_COMMENT") {
    const comments = TICKETS[data.ticketId].comments;
    comments.push(data);
    TICKETS[data.ticketId].comments = comments;
  }

  console.log(`Received event (${type})`);
};

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.sendStatus(200);
});

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(4002, async () => {
  console.log("Tickets server listening on port 4002");

  const response = await axios.get("http://localhost:4003/events");

  for (const event of response.data.events) {
    handleEvent(event.type, event.data);
  }
});
