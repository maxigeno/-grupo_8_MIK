const express = require("express");
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const path = require("path");
const sequelize = require("sequelize");

const app = express();

//configuro lo static para express
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'))

//Configuro motor de plantilla
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const productsRouter = require("./src/routes/products");

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/products", productsRouter);

//Definicion de los parametros de la base de datos

const db = new sequelize('mik_db','root','',{
  host:'localhost',
  dialect: 'mysql',
});

app.listen(3030, () => {
  console.log("Servidor funcionando");
});

module.exports = app;
