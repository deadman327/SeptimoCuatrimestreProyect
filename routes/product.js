/*
const router = require('express').Router()
const Product = require('../models/product')

// POST request - crear un nuevo producto
router.post('/products', async (req, res) =>{
    try {
        let product = new Product()
        product.title = req.body.title
        product.description = req.body.description
        product.photo = req.body.photo
        product.stockQuantity = req.body.stockQuantity
        
        await product.save()

        res.json({
            status: true,
            message: "Successfully saved"
        })
    }catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
        })
    }
})

// GET request - recibir todos los productos

// GET request - recibir un solo producto

// PUT request - Actualizar un producto

// DELETE request - eliminar un producto

module.exports = router
*/