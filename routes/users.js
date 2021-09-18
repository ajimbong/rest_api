const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const userModel = require('../models/usermodel');

router.get('/', (req, res)=>{
    let user = new userModel({
        username : 'Ajim Bong',
        password : 'helloworld',
        image: 'this is the image',
        email: 'this is the email',
        role: 'the manager'  
    })
    user.save()
        .then((result)=> res.send(result))
        .catch(e => console.log(e))
} );

module.exports = router