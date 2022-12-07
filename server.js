const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("Index");
  res.render("index");
});

app.get("/home", (req, res) => {
  console.log("Home");
  res.render("home");
});

app.get("/gallery", (req, res) => {
  console.log("Gallery");
  res.render("gallery");
});

app.get("/about", (req, res) => {
  console.log("About");
  res.render("about");
});

app.get("/contact", (req, res) => {
  console.log("Contact");
  res.render("contact");
});

app.listen(3000);
