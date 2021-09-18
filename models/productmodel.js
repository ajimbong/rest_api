const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
       productname: {
           type: String,
           required: true
       },
       category: {
           type: String,
           required: true
       },
       price: {
           type: Number,
           required: true
       },
       image: String,
       quantity: Number,
       description: String
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product