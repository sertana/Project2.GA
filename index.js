const express = require("express");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const morgan = require("morgan");

// other consts

const port = 3000;
const app = express(); // <- the app object

// ------------------------------------------------------------
// Hook up body-parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ------------------------------------------------------------
// Hook up mustache-express

// registers the template engine for use in res.render
app.engine("html", mustacheExpress());
// sets the file extension to use for views when the file extension is omitted
app.set("view engine", "html");
// sets the the directory that will contain our mustache template files, or "views"
app.set("views", __dirname + "/views");
// sets the directory that will contain our static (not generated on the fly) resources, such as css, client-side Javascript files, and images
app.use(express.static(__dirname + "/public"));

// ------------------------------------------------------------
// Hook up top-level routes

app.use(morgan("dev"));

// get the news router (the export of the sports controller file)
const newsRouter = require("./controllers/sports.js");
// hook it up to the app
app.use("/allnews", newsRouter);

// ------------------------------------------------------------
// Start listening!
app.listen(port, () => {
  console.log("Server started on " + port);
});
