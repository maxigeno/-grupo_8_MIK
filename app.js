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

app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve("./views/productDetail.html"));
});

app.get("/productIndex", (req, res) => {
  res.sendFile(path.resolve("./views/productIndex.html"));
});

app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve('./views/productCart.html'))
});