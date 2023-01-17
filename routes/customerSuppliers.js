const { Router } = require('express');

const { getCustomerSuppliers, getCustomerSupplerById, addCustomerSuppliers, editCustomerSuppliers, deleteCustomerSuppliers } = require('../controllers/customerSuppliers');

const router = Router();

router.get('/', getCustomerSuppliers );
router.get('/:id', getCustomerSupplerById );
router.post('/', addCustomerSuppliers );
router.put('/:id', editCustomerSuppliers );
router.delete('/:id', deleteCustomerSuppliers );


module.exports = router;