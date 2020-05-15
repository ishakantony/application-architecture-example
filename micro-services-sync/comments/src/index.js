const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { getCommentsRoute } = require("./routes/get-comments");
const { addCommentRoute } = require("./routes/add-comment");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(getCommentsRoute);
app.use(addCommentRoute);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(4001, () => {
  console.log("Comments server listening on port 4001");
});
