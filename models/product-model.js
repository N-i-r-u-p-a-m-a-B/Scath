const { name } = require("ejs");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image:String,
    name:String,
    image:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    pancolor:String,
    textcolor:String

});

module.exports=mongoose.model("product",productSchema)