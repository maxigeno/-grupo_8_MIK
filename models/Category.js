module.exports = (sequelize, DataTypes) =>{
    let alias = 'Categoria';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },

    };

};