const indexCtrl = {};
const { renderProductIndex } = require('../controllers/product.controller');

indexCtrl.renderIndex = async (req,res) => {
    const products = await renderProductIndex()
    //console.log(products)
    res.render('index', {products})
}

indexCtrl.renderAbout = (req,res) => {
    res.render('about')
}


module.exports = indexCtrl;