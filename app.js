const express = require("express");

const app = express();
const path = require("path");

app.use("/static", express.static("public"));

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/index.html"));
});

app.get('/register.html', (req, res) => {
  res.sendFile(path.resolve('./views/register.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve('./views/login.html'));
});
