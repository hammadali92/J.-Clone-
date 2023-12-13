const mongoose = require("mongoose")

const connect = () =>{
    try{
        const response = mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
        console.log("Mongodb connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connect