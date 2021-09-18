const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const categories = require('./routes/categories');
const products = require('./routes/products');
const users = require('./routes/users');

// connect to mongodb
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@harristonbase.gt2ur.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(url) 
    .then(result => {
        console.log('Connected to db')
        app.listen(3000, e => console.log('listening on port 3000'))
    })
    .catch(e=> console.error(e))

// configerations
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));

// listen for requests

app.use('/products',products);
app.use('/users',users);
app.use('/categories',categories); 


app.use((req, res)=>{
    res.status(404).send('404, Sorry this resource wasn\'t found');
})