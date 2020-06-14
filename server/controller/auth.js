const mongoose = require('mongoose')



const signUpSchema = mongoose.Schema({
fullName:{type:String , required:true},
userName:{type:String , required:true},
email:{type:String , required:true},
password:{type:String , required:true},
date: { type: Date, default: Date.now },
})


const logInSchema = mongoose.Schema({
    email:{type:String , required:true},
    password:{type:String , required:true},
})


module.exports.signup = mongoose.model('signUpSchema',signUpSchema)
module.exports.login = mongoose.model('logInSchema',logInSchema)