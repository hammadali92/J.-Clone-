const mongoose = require("mongoose");
const Product = mongoose.Schema({
    id:{type:String,default:""},
    image:{type:String,default:""},
    image1:{type:String,default:""},
    image2:{type:String,default:""},
    image3:{type:String,default:""},
    image4:{type:String,default:""},
    title:{type:String,default:""},
    price:{type:String,default:""},
    basic:{type:String,default:""},
    basic1:{type:String,default:""},
    basic2:{type:String,default:""},
    basic3:{type:String,default:""},
    basic4:{type:String,default:""},
    size:{type:String,default:""},
    color:{type:String,default:""},
    ProductCategory:{type:String,default:""},
    category:{type:String,default:""},
    collections:{type:String,default:""},
    design:{type:String,default:""},
    fabric:{type:String,default:""},
    disclaimer:{type:String,default:""}
})
module.exports = mongoose.model("products" , Product)