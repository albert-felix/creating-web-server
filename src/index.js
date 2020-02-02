const express = require("express");
const students = require("./students");

const app = express();

app.get("/", (request, respond) => {
  respond.send("<h1>Hello</h1>");
});

app.get("/students", (request, respond) => {
  respond.status(200).json({ students });
  respond.send(students);
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}.`);
});
