module.exports = (sequelize, dataType) => {
  let alias = "Banda";
  let cols = {
    id: {
      type: dataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: dataType.STRING,
  };
  let config = {
    tableName: "bandas",
    timestamps: false,
  };
  const Banda = sequelize.define(alias, cols, config);
  return Banda;
};
