const express = require("express");
const students = require("./students");
const bodyParser = require("body-parser");

const app = express();

// app.use((request, respond, next) => {
//   respond.send("from middleware");
//   request.customKey("value in middleware");
//   next();
// });

app.use(bodyParser.json());

app.get("/", (request, respond) => {
  respond.send("<h1>Hello</h1>");
});

app.get("/students", (request, respond) => {
  respond.status(200).json({ students});
  respond.send(students);
});

app.post("/students", (request, respond) => {
  if (request.body.id && request.body.FirstName) {
    students.push(request.body);
    respond.status(200).json({ message: "student updated" });
  } else {
    respond.status(400).send("Bad Request");
  }
});

app.get("/student/:id", (request, respond) => {
  const { id = "" } = request.params;
  const reqStudent = students.find(student => {
    if (parseInt(id) === student.id) return true;
    else return false;
  });
  respond.status(200).json({ student: reqStudent });
});

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}.`);
});
