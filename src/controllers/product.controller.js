const productCtrl = {};

productCtrl.renderProductForm = (req,res) => {
    res.render('products/add-prod');
};

productCtrl.createNewProduct = (req,res) => {
    console.log(req.body)   
    res.send('new prod added');
};


productCtrl.renderProduct = (req,res) => {
    res.send('render product');
};


productCtrl.renderEditForm = (req,res) => {
    res.send('render edit product');
};

productCtrl.updateProduct = (req,res) => {
    res.send('update product');
};

productCtrl.deleteProduct = (req,res) => {
    res.send('delete Product');
};

module.exports = productCtrl;