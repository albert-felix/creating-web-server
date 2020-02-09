const express = require("express");
const bodyParser = require("body-parser");
const studentsRouter = require("./Router/studentsRouter");
const studentRouter = require("./Router/studentRouter");

const app = express();

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/students", studentsRouter);

app.use("/student", studentRouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
