const express = require("express");

const app = express();
const path = require("path");

//configuro lo static para express
app.use("/static", express.static("public"));

//Configuro motor de plantilla
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");

app.use("/", indexRouter);
app.use("/login", indexRouter);
app.use("/register", indexRouter);
app.use("/productCart", indexRouter);
app.use("/productDetail", indexRouter);
app.use("/productIndex", indexRouter);
app.use("/users", usersRouter);

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

/* app.get("/register", (req, res) => {
  res.sendFile(path.resolve("./views/register.html"));
}); */

/* app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
}); */

/* app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve("./views/productDetail.html"));
}); */

/* app.get("/productIndex", (req, res) => {
  res.sendFile(path.resolve("./views/productIndex.html"));
}); */

/* app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve("./views/productCart.html"));
}); */
