const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/add_product', ProductController.createProduct);
    app.get('/api/get_products', ProductController.getAllProducts);
    app.get('/api/get_products/:id', ProductController.getProduct);
}
