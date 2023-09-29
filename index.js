const express = require("express");
require("dotenv").config();
// const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let pLangs = [];

app.get("/", (req, res) => {
  res.render("index", { pLname: pLangs });
});
app.post("/", (req, res) => {
  const pLang = req.body.pLang;
  pLangs.push(pLang);
  res.redirect("/");
});
app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.listen(PORT, () => {
  console.log(`Server runing at http://localhost:${PORT}`);
});
