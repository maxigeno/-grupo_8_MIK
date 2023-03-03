//const e = require('express');
const db = require("../../database/models");
const { Association } = require("sequelize");
const Op = db.Sequelize.Op;

const userAPIController = {
  list: (req, res) => {
    db.User.findAll()
      .then((data) => {
        let users = data.map((user) => {
          return {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            avatar: user.avatar,
            rol: user.rol,
          };
        });
        res.status(200).json({
          total: data.length,
          users,
          status: 200,
        });
      })
      .catch((error) => {
        console.log("Error: " + error);
        res.status(500).json({
          status: 500,
          message: "Error al buscar los usuarios",
        });
      });
  },

  detail: (req, res) => {
    db.User.findByPk(req.params.id)
      .then((data) => {
        if (data) {
          res.status(200).json({
            user: {
              id: data.id,
              nombre: data.nombre,
              apellido: data.apellido,
              email: data.email,
              avatar: data.avatar,
              rol: data.rol,
            },
            status: 200,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Error, usuario no encontrado",
          });
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
        res.status(500).json({
          status: 500,
          message: "Error al buscar el usuario",
        });
      });
  },
};

module.exports = userAPIController;
