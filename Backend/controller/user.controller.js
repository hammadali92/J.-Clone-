
const User = require("../models/user.model");
const bcrypt = require("bcryptjs"); 
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';
//Create
// exports.store = async(req,res)=>{
//     try{
//  //for aceessing body data
//  const payload = req.body;
//  //  console.log(payload)
//  const email = await User.findOne({email:payload.email})
//  if(email){
//     return res.json({message:"Email Already Exist",status:409})
//  }
//  else{
    
//  }
//  const saltRounds = 10;
//  let hashedPassword=await bcrypt.hash(payload.password ,saltRounds);
//  const user =await User.create({...payload, password : hashedPassword});
//  res.json({message:"User Created Successfully",status:200, user})
//  // res.json("Created Successfully");
//     }
//     catch (err){
//         console.log(err);
//     }
   

// }
exports.store = async (req, res) => {
    try {
      // for accessing body data
      const payload = req.body;
      // console.log(payload)
  
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email: payload.email.trim() });

  
      if (existingUser) {
        // Email already exists, return a response indicating the conflict
        return res.json({ message: "Email Already Exist", status: 409 });
      }
  
      // If the email doesn't exist, proceed with creating the user
      const saltRounds = 10;
      let hashedPassword = await bcrypt.hash(payload.password, saltRounds);
      
      const user = await User.create({ ...payload, password: hashedPassword });
  
      // Return a success response
      return res.json({ message: "User Created Successfully", status: 200, user });
    } catch (err) {
      console.log(err);
      // Handle other errors and return an appropriate response
      return res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  };
  
//  index use -> for get    index means zyada
exports.index= async(req,res)=>{
    // res.json("Fetched Successfully");
    try{
// const users = await User.find();
// const users = await User.find({email:"hammadali9245@gmail.com"});
const users = await User.find();
res.json({message:"User Fetched Successfully",status:200, users})
    }
    catch (err){
        console.log(err);
    }
}

exports.login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        console.log(email,password);
        const user = await User.findOne({email})
        if(!user){
            return   res.json({message:"User not find ", status:404, success:false})
        }
        else{
            bcrypt.compare(password , user.password, (err, result) =>{
                if(err){
                    console.error( err );
                }
                if(result){
                    const token = jwt.sign({ userId: user._id,  firstName: user.firstName }, 'abcd12@12');
                    return res.json({message:"Password match successfully", status:200, success:true ,token})
                }
                else{
                    return res.json({message:"Password  does not match ", status:404, success:false })
                }
            })
            // res.json({message:"User  find ", status:200, success:true ,  user}) 
        }
    }
    catch (error){
        console.log(error);    }
}

// get means single 
exports.get= async(req,res)=>{
    // res.json("Fetched Successfully");
    const id = req.params.id.trim();

    try{

const users = await User.findOne({_id:id});
res.json({message:"User Fetched Successfully",status:200, users})
    }
    catch (err){
        console.log(err);
    }
}

  // destory use for delete
// exports.destroy= async(req,res)=>{
//     // res.json("Fetched Successfully");
//     // const id = req.params.id;
// try{
// const user = await User.findOneAndDelete({_id:req.params.id});
// res.json({message:"User Fetched Successfully",status:200, user})
// if(!user){
//     res.json("User Not Found")
// }else{
//     res.json({message:"User deleted Successfully",status:200}) 
// }
//     }
//     catch (err){
//         console.log(err);
//     }
// }

// update is used to update the date 
// exports.update= async(req,res)=>{
//     // res.json("Fetched Successfully");
//     const id = req.params.id.trim();
//       try{
//         const user = await User.findOneAndUpdate({_id:id},req.body,{new:true});
// if(!user){
//     res.json("User Not Found")
// }else{
//     res.json({message:"User updateted Successfully",status:200, user}) 
// }
//     }
//     catch (err){
//         console.log(err);
//     }
// }

