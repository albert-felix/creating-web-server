const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path =  require("path");
const studentsRouter = require("./Router/studentsRouter");
const studentRouter = require("./Router/studentRouter");
const students = require("./students")
const formatIndex = require("./views/helper/formatIndex")
const ifEquality = require("./views/helper/ifEquality")

const app = express();

const hbs = expressHbs.create({
  extname : ".hbs",
  layoutsDir : path.join(__dirname,"./views/layouts"),
  partialsDir : path.join(__dirname,"./views/partials"),
  helpers: {
    formatIndex,
    ifEquality
  }
});


app.engine(".hbs",hbs.engine);
app.set("view engine",".hbs");
app.set("views",path.join(__dirname,"./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.render("home",{
    layout: "hero",
    pageTitle: "Home"
  });
});

app.get("/web/students",(req,res) => {
  res.render("students",{
    layout : "navigation",
    pageTitle: "Students",
    students
  })
});

app.get("/web/add-student",(req,res) => {
  res.render("addStudent",{
    layout: "navigation",
    pageTitle : "Add New Student",
    studentID : students.length+1
  })
});

app.get("/web/edit-student/:id", (req, res) => {
  const { id = "" } = req.params;
  const requiredStudent = students.find(student => {
    if (parseInt(id) === student.id) return true;
    else return false;
  });
  if (requiredStudent) {
    res.render("addStudent", {
      layout: "navigation",
      pageTitle: "Add New Student",
      studentID: requiredStudent.id,
      mode: "edit",
      student: requiredStudent
    });
  } else {
    res.status(404).send("Not Found");
  }
});

app.use("/students", studentsRouter);

app.use("/student", studentRouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
