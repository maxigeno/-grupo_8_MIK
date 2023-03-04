//const e = require("express");
const db = require("../../database/models");
const { Association } = require("sequelize");
const Op = db.Sequelize.Op;

const productAPIController = {
  list: (req, res) => {
    db.Product.findAll({
      include: [{ association: "categoria" }],
    })
      .then((data) => {
        let deporte = data.filter((producto) => {
          return producto.categoria.nombre == "deportes";
        });
        let arte = data.filter((producto) => {
          return producto.categoria.nombre == "arte";
        });
        let cocina = data.filter((producto) => {
          return producto.categoria.nombre == "cocina";
        });
        let reacreacion = data.filter((producto) => {
          return producto.categoria.nombre == "reacreación";
        });
        let educacion = data.filter((producto) => {
          return producto.categoria.nombre == "educación";
        });

        res.status(200).json({
          total_productos: data.length,
          categorias: [
            {
              nombre: "deportes",
              cantidad: deporte.length,
            },
            {
              nombre: "arte",
              cantidad: arte.length,
            },
            {
              nombre: "cocina",
              cantidad: cocina.length,
            },
            {
              nombre: "reacreación",
              cantidad: reacreacion.length,
            },
            {
              nombre: "educación",
              cantidad: educacion.length,
            },
          ],

          data,
          status: 200,
        });
      })
      .catch((error) => {
        console.log("Error: " + error);
        res.status(500).json({
          status: 500,
          message: "Error al buscar los productos",
        });
      });
  },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((data) => {
        if (data) {
          res.status(200).json({
            data,
            status: 200,
          });
        } else {
          res.status(404).json({
            status: 404,
            message: "Error, producto no encontrado",
          });
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
        res.status(500).json({
          status: 500,
          message: "Error al buscar el producto",
        });
      });
  },
  /*   try {
      let data = await db.Product.findByPk(req.params.id);
      let category = await db.Category.findAll({
        include: [{ association: "productos" }],
      });

      if (data) {
        res.status(200).json({
          data,
         
          status: 200,
        });
      }
      res.status(404).json({
        status: 404,
        message: "Error, porducto no encontrado",
      });
    } catch (error) {
      console.log("Error: " + error);
      res.status(500).json({
        status: 500,
        message: "Error al buscar el producto",
      });
    }
  }, */
};

module.exports = productAPIController;
