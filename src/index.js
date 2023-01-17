const express = require("express");
const app = express();
const path = require("path");
const weatherstack = require("./utils/weatherstack");

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  weatherstack(req.query.address, (error, solutionTime) => {
    if (error) {
      return res.send({ error });
    }

    res.send(solutionTime);
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
