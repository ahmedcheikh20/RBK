const express = require("express");
const app = express();

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function (req, res) {});

app.get("/repos", function (req, res) {});

const port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
