const { DataTypes } = require('sequelize');

const { db } = require('../database/database');

const { Product } = require('../models/products');


const CustomerSupplier = db.define('customerSupplier', {
    rut: {
        type: DataTypes.STRING
    }, 
    razon_social: {
        type: DataTypes.STRING
    }, 
    nombre_fantasia: {
        type: DataTypes.STRING
    }, 
    giro: {
        type: DataTypes.STRING
    }, 
    telefono: {
        type: DataTypes.STRING
    }, 
    email: {
        type: DataTypes.STRING
    }, 
    direccion: {
        type: DataTypes.STRING
    }, 
    idcomuna: {
        type: DataTypes.INTEGER
    }, 
    ciudad: {
        type: DataTypes.STRING
    }, 
    activo: {
        type: DataTypes.BOOLEAN
    }, 
    es_cliente: {
        type: DataTypes.BOOLEAN
    }, 
    es_proveedor: {
        type: DataTypes.BOOLEAN
    },     
},{
    tableName: 'clienteproveedor'
})

CustomerSupplier.hasMany( Product, {
    foreignKey: 'idclienteproveedor',
    sourceKey: 'id'
});

Product.belongsTo( CustomerSupplier, {
    foreignKey: 'idclienteproveedor',
    targetKey: 'id'
});



module.exports = { CustomerSupplier }