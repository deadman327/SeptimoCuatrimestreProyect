const Product = require('../models/product')
const { getUserByID } = require('../controllers/users.controller');
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
        req.flash('success_msg', 'Producto agregado correctamente');
        res.redirect('/products');


       
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
    const product = await Product.find({owner: req.user.id });
    res.render('products/all-products', { product });
    /*
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
        let products = await Product.findOne( {_id: req.params.id} ).lean();

        res.render('products/edit-prod', {products});
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
        let products = await Product.findOne( {_id: req.params.id} ).lean();
        const user = await getUserByID(products.owner)
        console.log(user.email)

        res.render('products/details', {products}, {user});
    } catch (err){
        res.status(500).jsoon({
            success: false,
            message: err.message
        })
    }
    //res.send('render edit product');
};

productCtrl.updateProduct = async (req,res) => {
    console.log(req.body);
    const {title, description, price, stockQuantity} = req.body;
    console.log(req.body);
    console.log('msg before');
    const photo = req.file.location;
    console.log('msg after');
    await Product.findByIdAndUpdate(req.params.id, {title, description, price, stockQuantity, photo})
    req.flash('success_msg', 'Producto actualizado con exito');
    console.log('producto actualizado')
    res.redirect('/products');
};

productCtrl.deleteProduct = async (req,res) => {
    await Product.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Producto eliminado con exito');
    res.redirect('/products');
};

module.exports = productCtrl;