const Unstitched_Model = require("../models/Unstitched.model")

exports.store = async(req, res)=>{
    try{
        //for aceessing body data
 const payload = req.body;
 //   console.log(payload)
  const unstitched =await Unstitched_Model.create(payload);
  res.json({message:"User Created Successfully",status:200, unstitched})
    }
    catch (err){
        console.log(err);
    }
}
//get
exports.index= async(req,res)=>{
   
    try{
        const category = req.params.category
const unstitched = await Unstitched_Model.find({ category: category });
res.json({message:"User Fetched Successfully",status:200, unstitched})
    }
    catch (err){
        console.log(err);
    }
}


exports.get = async (req, res) => {
  const id = req.params.id.trim();

  try {
    const unstitched = await Unstitched_Model.findOne({ _id: id });
    res.json({ message: "User Fetched Successfully", status: 200, unstitched });
  } catch (err) {
    console.log(err);
  }
}
//get
// get means single 
// exports.get= async(req,res)=>{
//     // res.json("Fetched Successfully");
//     const id = req.params.id.trim();

//     try{

// const users = await Unstitched_Model.findOne({_id:id});
// res.json({message:"User Fetched Successfully",status:200, users})
//     }
//     catch (err){
//         console.log(err);
//     }
// }

//delete
exports.destroy= async(req,res)=>{
    // res.json("Fetched Successfully");
    // const id = req.params.id;
try{
const user = await Unstitched_Model.findOneAndDelete({_id:req.params.id});
// res.json({message:"User Fetched Successfully",status:200, user})
if(!user){
    res.json("User Not Found")
}else{
    res.json({message:"User deleted Successfully",status:200}) 
    window.location.reload(true);
}
    }
    catch (err){
        console.log(err);
    }
}

// update is used to update the date 
exports.update= async(req,res)=>{
    // res.json("Fetched Successfully");
    const id = req.params.id.trim();
      try{
        const user = await Unstitched_Model.findOneAndUpdate({_id:id},req.body,{new:true});

if(!user){
    res.json("User Not Found")
}else{
    res.json({message:"User updateted Successfully",status:200, user}) 
}
    }
    catch (err){
        console.log(err);
    }
}