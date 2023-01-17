const { Router } = require('express');

const { getProducts, getProductById, addProducts, editProducts, deleteProducts } = require('../controllers/products');

const router = Router();

router.get('/:pag/:reg', getProducts );
router.get('/:id', getProductById );
router.post('/', addProducts );
router.put('/:id', editProducts );
router.delete('/:id', deleteProducts );


module.exports = router;