const express = require('express');
const router = express.Router();
const productModel = require('../models/productmodel');

router.get('/', (req, res)=>{
    let product = new productModel({
        productname: 'food',
        category: 'phone',
        price: 500,
        image: 'this goes no where',
        quantity: 3,
        description: 'This is is just a test product to see how it works'
    })
    product.save()
        .then((result)=> res.send(result))
        .catch(e => console.log(e))
} );

module.exports = router