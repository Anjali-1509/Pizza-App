const mongoose = require("mongoose")
const UserModel = require("../Models/userModel")

exports.createUser= async(req, res)=>{
try{
let data = req.body
let email = data.email
let user = await UserModel.create(data)
// let isExist= await UserModel.findOne({email : email})
// console.log(isExist)
// if(isExist) return res.status(400).send({success:false, message : "User Already Exists"})
return res.status(201).send({success: true,message:"Registered Successfully", user : user})
}
catch(err){
    return res.status(500).send({success:false, message : 'Something Went Wrong While Creating User', error: err.message})
}
}


exports.loginUser = async(req, res)=>{
try{
let {email, password} = req.body
if(!email) return res.status(400).send({succss:false, message: "Email Is Required"})
if(!password) return res.status(400).send({succss:false, message: "Password Is Required"})

let user = await UserModel.findOne({email:email, password: password}).select({password:0, __v : 0,createdAt:0, updatedAt:0})
if(!user) return res.status(400).send({success:false, message:"User Not Found"})
return res.status(200).send(user)
}
catch(err){
    return res.status(500).send({success:false, message : 'Something Went Wrong While Logging In', error: err.message})   
}
}