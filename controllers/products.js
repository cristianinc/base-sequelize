const { request , response} = require('express');

const { CustomerSupplier } = require('../models/customerSuppliers');
const { Product } = require('../models/products');

const getProducts = async (req = request, res = response) => {
    const { pag, reg } = req.params;
    
    //*1 es para evitar que pase como string
    const products = await Product.findAll({ offset: pag*1, limit: reg*1 },{ include: {
        model: CustomerSupplier
    } });

    res.status(200).json(products);
}

const getProductById = async (req = request, res = response) => {
    const { id } = req.params;

    const products = await Product.findByPk( id, { include: {
        model: CustomerSupplier
    } } ); 

    if( products === null ){
        return res.status(404).json({
            msg: 'data not found'
        });
    }

    return res.status(200).json(products);

}

const addProducts = async (req, res = response) => {
    const { body } = req;

    //faltan las validaciones

    try {
        const product = new Product(body);
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        throw new Error (error);
    }
}

const editProducts = async (req = request, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const products = await Product.findByPk( id, { include: {
            model: CustomerSupplier
        } } ); 

    if( products === null ){
        return res.status(404).json({
            msg: 'data not found'
        });
    }
    await products.update( body );
    
    return res.status(200).json(products);

    } catch (error) {
        throw new Error (error);
    }

}

const deleteProducts = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const products = await Product.findByPk( id );
    
        if( products === null ){
            return res.status(404).json({
                msg: 'data not found'
            });
        }
        await products.update({ activo: false });
        
        return res.status(200).json(products);
    
        } catch (error) {
            throw new Error (error);
        }

}
module.exports = { getProducts, getProductById, addProducts, editProducts, deleteProducts }