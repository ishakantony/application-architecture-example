const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  getTicketsWithCommentsRoute,
} = require("./routes/get-tickets-with-comments");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getTicketsWithCommentsRoute);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(4002, () => {
  console.log("Tickets server listening on port 4002");
});
