const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const { getCommentsRoute } = require("./routes/get-comments");
const { addCommentRoute } = require("./routes/add-comment");

const { COMMENTS } = require("./data/comments");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getCommentsRoute);
app.use(addCommentRoute);

const handleEvent = (type, data) => {
  if (type === "ADD_COMMENT") {
    COMMENTS.push(data);
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

app.listen(4001, async () => {
  console.log("Comments server listening on port 4001");

  const response = await axios.get("http://localhost:4003/events");

  for (const event of response.data.events) {
    handleEvent(event.type, event.data);
  }
});
