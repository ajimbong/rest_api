const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categorymodel')

router.get('/', (req, res)=>{
    const category = new categoryModel({
        categoryname: 'phone'
    })
    category.save()
        .then((result)=>{
            res.send(result)
        })
        .catch(e => console.log(e))
} );

module.exports = router