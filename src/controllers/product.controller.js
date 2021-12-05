const Product = require('../models/product')

const productCtrl = {};

productCtrl.renderProductForm = async (req,res) => {
    //res.send('render product');   
    res.render('products/add-prod');
};

productCtrl.createNewProduct = async (req,res) => {
    
    try {
        let product = new Product()
        
        product.title = req.body.title
        product.description = req.body.description
        product.price = req.body.price
        product.photo = req.file.location
        product.stockQuantity = req.body.stockQuantity
        product.owner = req.user.id;
        
        await product.save()

        res.redirect('/');


       
    }catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
        })
    }
    console.log(req.body)   
    //res.send('new prod added');
};


productCtrl.renderProduct = async (req,res) => {
    try {
        const products = await Product.find({owner: req.user.id}).lean();
        console.log(products)
        res.send(products)
    } catch (err){
        return err.message
    }
    //res.render('/');

    /*
    try {
        let products = await Product.find()
        
        res.json({
            success: true,
            products
        })
    } catch (err){
        res.status(500).jsoon({
            success: false,
            message: err.message
        })
    }
    //res.send('render product');
    */
};

productCtrl.renderProductIndex = () => {

    try {
        let products = Product.find().lean();
        return products
    } catch (err){
        return err.message
    }
};


productCtrl.renderEditForm = async (req,res) => {
    try {
        let products = await Product.findOne( {_id: req.params.id} )

        res.render('products/edit-prod.hbs');
    } catch (err){
        res.status(500).jsoon({
            success: false,
            message: err.message
        })
    }
    //res.send('render edit product');
};

productCtrl.renderProductByID= async (req,res) => {
    try {
        let products = await Product.findOne( {_id: req.params.id} )

        res.send(products)
        //res.render('products/edit-prod.hbs');
    } catch (err){
        res.status(500).jsoon({
            success: false,
            message: err.message
        })
    }
    //res.send('render edit product');
};

productCtrl.updateProduct = async (req,res) => {
    const {title, description, price, stockQuantity} = req.body;
    const photo = req.file.location;
    await Product.findByIdAndUpdate(req.params.id, {title, description, price, stockQuantity, photo})
    res.send('update product');
};

productCtrl.deleteProduct = async (req,res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send('delete Product');
};

module.exports = productCtrl;