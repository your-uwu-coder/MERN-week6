const ProductController = require('../controllers/product.controllers');

module.exports = app => {
    app.get('/api/allProducts', ProductController.allProducts)
    app.post('/api/postProduct', ProductController.newEntry)
    app.get('/api/oneProduct/:id', ProductController.oneProduct)
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}