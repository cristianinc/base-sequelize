const { DataTypes } = require('sequelize');

const { db } = require('../database/database');

const Product = db.define('product', {
    codigo: {
        type: DataTypes.STRING
    }, 
    nombre: {
        type: DataTypes.STRING
    }, 
    descripcion_larga: {
        type: DataTypes.STRING
    }, 
    precio: {
        type: DataTypes.FLOAT
    }, 
    cantidad: {
        type: DataTypes.INTEGER
    }, 
    ruta_img: {
        type: DataTypes.STRING
    }, 
    activo: {
        type: DataTypes.BOOLEAN
    }, 
    idmodelo: {
        type: DataTypes.INTEGER
    }   
},{
    tableName: 'producto'
})


module.exports = { Product }
