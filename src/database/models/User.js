module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
      apellido: {
            type: dataTypes.STRING,
            allowNull: false
        },
      email:{
            type: dataTypes.STRING,
            allowNull: false
        },
      password: {
            type: dataTypes.STRING,
            allowNull: false,
        },
      avatar: dataTypes.STRING,
            
      rol: {
            type: dataTypes.STRING,
            allowNull: false    
        },
  };
  let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
  };
      
  
  const User = sequelize.define(alias, cols, config)
  User.associate = function(models){
    User.belongsToMany(models.Product,{
      as : 'pedidos',
      through : 'pedido_detalle',
      foreignKey : 'usuario_id',
      otherKey : 'producto_id',
      timestamps : false
    });
  }
  return User;
}