const { BelongsToMany } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull : false
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull : false
        },
        descripcion_corta: DataTypes.STRING,
           
        precio:{
            type: DataTypes.INTEGER,
            allowNull : false
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull : false
        },
        nuevo:{
            type: DataTypes.BOOLEAN,
            allowNull : false
        },
        destacado:{
            type: DataTypes.BOOLEAN,
            allowNull : false
        },
        porcentaje_descuento:{
            type: DataTypes.INTEGER,
            allowNull : false
        },
        categoria_id:{
            type: DataTypes.INTEGER,
            allowNull : false
        },

    }
   
    let config ={
        tableName: 'productos',
        timestamps: false,
        underscore: true
    } 
    
    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as : 'categoria',
            foreignKey : 'categoria_id'
        });
        Product.belongsToMany(models.User,{
            as : 'pedidos',
            through : 'pedido_detalle',
            foreignKey : 'producto_id',
            otherKey : 'usuario_id',
            timestamps : false
        });
    };
    return Product;
}