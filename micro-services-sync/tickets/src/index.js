const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { getTicketsRoute } = require("./routes/get-tickets");
const { addTicketRoute } = require("./routes/add-ticket");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getTicketsRoute);
app.use(addTicketRoute);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(4000, () => {
  console.log("Tickets server listening on port 4000");
});
