module.exports = (sequelize, DataTypes) =>{
    let alias = 'Curso';
    let cols = {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
            },
            name:{
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            price:{
                type: float?
                allowNull: false,
            },
            description:{
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            short_description:{
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            is_new:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            in_sale:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            discount:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            target:{
                type: DataTypes.STRING(50),
                allowNull: false
            },

    }










}