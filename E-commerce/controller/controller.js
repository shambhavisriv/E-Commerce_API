const express = require('express');
const mongoose = require('mongoose');
const Product = require('../model');
const router= express.Router();

//to get all the products

exports.getAllProducts = (req,res,next) =>{
    Product 
    .find()
    .exec()
    .then(Products =>{
        const response = {
            const : Products.length,
            Products : Products.map( Product => {
                return {
                    id : Product.id,
                    name : Product.name,
                    quantity : Product.quantity,

            }   
            })
        };
        res.status(200).json(response);
    
    })
    .catch(error => {
        next(error);
    })
};
//create the products
exports.createProducts = (req,res,next) =>{
     const product = createProduct(req);
    Product
    .save()
    .then(product =>{
       res.status(200).json({
           Product : {
            id : Product.id,
            name : Product.name,
            quantity : Product.quantity,


           }
       });
    })  
    .catch(error => {
        next(error);
    })
};
//Update Products
exports.updateProduct = (req,res,next) => {
    const ProductId = Product.id;
    Product
    .update({id : ProductId})
    .exec()
    .then(result => {
        res.status(200).json({
            message : 'Update Product',
            result: result
        });
    })
    .catch(error => {
        next(error);
    })
};
//delete Products
exports.deleteProduct = (req,res,next) => {
    const ProductId = Product.id;
    Product
    .remove({id : ProductId})
    .exec()
    .then(result => {
        res.status(200).json({
            message  : 'deleted',
            result : result
        });
    })
    .catch(error => {
        next(error);
    })
};

function createProduct(req){
    return new Product({
        id : mongoose.Schema.Types.ObjectId,
        name : req.body.name,
        quantity : req.body.quantity
    });
}




module.exports = router;