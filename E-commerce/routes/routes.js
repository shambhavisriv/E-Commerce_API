  
const express = require('express');
const router = express.Router();
module.exports = (app) => {
    const Product = require('../controller/controller.js');


    // get all the products
    app.get('/Product', Product.getAllProducts);
    // Create a new product
    app.post('/Product', Product.createProducts);

  

  
    // Update Product with product Id
    app.put('/Product/:ProductId', Product.updateProduct);

    // Delete Product with Delete Id
    app.delete('/Product/:ProductId', Product.deleteProduct);
}
module.exports = router;