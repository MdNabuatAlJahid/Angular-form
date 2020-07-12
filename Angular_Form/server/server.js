const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//assign port number
const PORT = 3000;

//creat an instance for express
const app = express();

//bodyParser handle json data as a middleware
app.use(bodyParser.json());

//cors is used to make request across different ports
app.use(cors());

//testing a get requist
app.get("/", function (req, res) {
  res.send("Hello from server");
});

//endpoint to post form data
app.post("/ticket", function (req, res) {
  console.log(req.body);
  res.status(401).send({ message: "data received!" });
});

//listening the port
app.listen(PORT, function () {
  console.log("Server running on localhost: " + PORT);
});
