const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/recv", (req, res) => {
  for (const key in req.body) {
    console.log(`\n${key}: ${req.body[key]}`);
  }
  res.redirect("https://google.com");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Listen...");
});
