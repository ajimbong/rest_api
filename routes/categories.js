const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categorymodel')

router.get('/', (req, res)=>{
    
    const category = categoryModel.find()
    .then((result)=>{
        res.send(result +'this is retrieved from db')
    })
    .catch(e => console.log(e))
    
} );

router.post('/', (req,res)=>{
    const category = new categoryModel({
        categoryname: 'phone'
    })
    category.save()
        .then((result)=>{
            res.send(result)
        })
        .catch(e => console.log(e))
})
router.delete('/:id', (req, res)=>{
    const category = categoryModel.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.send('was deleted')
    })
    .catch(e => console.log(e))
})

module.exports = router