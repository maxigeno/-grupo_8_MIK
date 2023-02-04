

module.exports = (sequelize, DataTypes) =>{
    let alias = 'Usuario';
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    
};