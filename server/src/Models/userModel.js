const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    name : {
        type:String,
        required: [true, "Name is Required"]
    }
    ,
    email :{
        type : String,
        required:[true, "Email is required"]
    },
     phone : {
        type : Number,
        required:[true, "Number is Required"]
     },
     password:{
        type : String,
        required:[true, "Password is Required"]
     },
     isAdmin:{
        type: Boolean,
        default: false
     }
}, {timestamps: true})

module.exports= mongoose.model("User", userSchema)