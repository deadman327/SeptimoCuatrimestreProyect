const { Router } = require('express')
const upload = require("../middlewares/upload-photo")
const router = Router();

const { renderProductForm, createNewProduct, renderProduct, renderEditForm, updateProduct, deleteProduct, renderProductByID } = require('../controllers/product.controller');

//new product
    router.get('/products/add-prod', renderProductForm );
    router.post('/products/new-prod', upload.single('photo'), createNewProduct );

//get all prod

router.get('/products', renderProduct );

// render one product
router.get('/products/:id', renderProductByID );

//edit product
router.get('/products/edit/:id', renderEditForm );
router.put('/products/edit/:id', upload.single('photo'), updateProduct );

//delete product

router.delete('/products/delete/:id', deleteProduct );

module.exports = router