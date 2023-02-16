module.exports = (sequelize,DataTypes) => {
    let alias = 'Category';
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
        }
    }
    
    let config ={
        tableName: 'categorias',
        timestamps: false,
        underscored: true
    }
   
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as : 'productos',
            foreignKey : 'categoria_id'
        })
    }
    return Category;
}