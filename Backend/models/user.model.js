const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{type:String,default:""},
    lastName:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    address:{type:String,default:""},
    city:{type:String,default:""},
    state:{type:String,default:""},
    zip:{type:String,default:""},
    isActive:{type:Boolean,default:false}
})
module.exports=mongoose.model("users", userSchema)


