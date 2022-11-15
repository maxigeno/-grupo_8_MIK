const express = require("express");
//const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const path = require("path");

const app = express();

//configuro lo static para express
app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configuro motor de plantilla
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const productsRouter = require("./src/routes/products");

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/product", productsRouter);

app.listen(3030, () => {
  console.log("Servidor funcionando");
});
