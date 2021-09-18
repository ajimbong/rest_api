const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    categoryname: String
})
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;