const { Router } = require('express')
const router = Router();

const { renderProductForm, createNewProduct, renderProduct, renderEditForm, updateProduct, deleteProduct } = require('../controllers/product.controller');

//new product
    router.get('/products/add-prod', renderProductForm );
    router.post('/products/new-prod', createNewProduct );

//get all prod

router.get('/products', renderProduct );

//edit product
router.get('/products/edit/:id', renderEditForm );
router.put('/products/edit/:id', updateProduct );

//delete product

router.delete('/products/delete/:id', deleteProduct );

module.exports = router