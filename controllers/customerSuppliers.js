const { request , response} = require('express');
const { CustomerSupplier } = require('../models/customerSuppliers');


const getCustomerSuppliers = async (req = request, res = response) => {

    const customerSuppliers = await CustomerSupplier.findAll({ offset: 5, limit: 5 });


    res.status(200).json(customerSuppliers);

}

const getCustomerSupplerById = async (req = request, res = response) => {
    const { id } = req.params;

    const customerSuppliers = await CustomerSupplier.findByPk( id );

    if( customerSuppliers === null ){
        return res.status(404).json({
            msg: 'data not found'
        });
    }
    
    return res.status(200).json(customerSuppliers);
    

}

const addCustomerSuppliers = async (req, res = response) => {
    const { body } = req;

    //faltan las validaciones

    try {
        const customerSupplier = new CustomerSupplier(body);
        await customerSupplier.save();
        return res.status(200).json(customerSupplier);
    } catch (error) {
        throw new Error (error);
    }
}

const editCustomerSuppliers = async (req = request, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {
    const customerSuppliers = await CustomerSupplier.findByPk( id );

    if( customerSuppliers === null ){
        return res.status(404).json({
            msg: 'data not found'
        });
    }
    await customerSuppliers.update( body );
    
    return res.status(200).json(customerSuppliers);

    } catch (error) {
        throw new Error (error);
    }

}

const deleteCustomerSuppliers = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const customerSuppliers = await CustomerSupplier.findByPk( id );
    
        if( customerSuppliers === null ){
            return res.status(404).json({
                msg: 'data not found'
            });
        }
        await customerSuppliers.update({ activo: false });
        
        return res.status(200).json(customerSuppliers);
    
        } catch (error) {
            throw new Error (error);
        }

}

// const exportCustomerSuppliers = (req = require, res = response) => {
//     res.status(200).json({
//         msg: 'exportCustomerSuppliers'
//     });

// }

module.exports = { getCustomerSuppliers, getCustomerSupplerById, addCustomerSuppliers, editCustomerSuppliers, deleteCustomerSuppliers }