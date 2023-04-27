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