const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path =  require("path");
const studentsRouter = require("./Router/studentsRouter");
const studentRouter = require("./Router/studentRouter");

const app = express();

const hbs = expressHbs.create({
  extname : ".hbs",
  layoutsDir : path.join(__dirname,"./views/layouts"),
  partialsDir : path.join(__dirname,"./views/partials")
});

app.engine(".hbs",hbs.engine);
app.set("view engine",".hbs");
app.set("views",path.join(__dirname,"./views"));

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   // res.send("Response from Middleware");
//   req.customKey = "Value set in the middleware";
//   next();
// });

app.get("/", (req, res) => {
  res.render("home",{
    layout: "hero"
  });
});

app.use("/students", studentsRouter);

app.use("/student", studentRouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
