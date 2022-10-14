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
