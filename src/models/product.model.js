const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {type : String, required: true},
    price:{type : String, required: true} ,
    description : {type : String, required: true} ,
    image_url : [{ type : String, required: true}],
    weight : { type : String, required: true},
} , {
    versionKey : false ,
    timestamps : true
}) ;

const Product = mongoose.model("product" , productSchema) ;
module.exports = Product ;