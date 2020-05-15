const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const { getTicketsRoute } = require("./routes/get-tickets");
const { addTicketRoute } = require("./routes/add-ticket");

const { TICKETS } = require("./data/tickets");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getTicketsRoute);
app.use(addTicketRoute);

const handleEvent = (type, data) => {
  if (type === "ADD_TICKET") {
    TICKETS[data.id] = data;
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

app.listen(4000, async () => {
  console.log("Tickets server listening on port 4000");

  const response = await axios.get("http://localhost:4003/events");

  for (const event of response.data.events) {
    handleEvent(event.type, event.data);
  }
});
