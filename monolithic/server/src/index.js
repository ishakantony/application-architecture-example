const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { getTicketsRoute } = require("./routes/get-tickets");
const { addTicketRoute } = require("./routes/add-ticket");
const { getCommentsRoute } = require("./routes/get-comments");
const { addCommentRoute } = require("./routes/add-comment");
const {
  getTicketsWithCommentsRoute,
} = require("./routes/get-tickets-with-comments");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getTicketsRoute);
app.use(addTicketRoute);
app.use(getCommentsRoute);
app.use(addCommentRoute);
app.use(getTicketsWithCommentsRoute);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(4000, () => {
  console.log("Monolith server listening on port 4000");
});
