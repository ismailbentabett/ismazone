const mongoose = require('mongoose')



const productSchema = mongoose.Schema({
category:{type:String , required:true},
name:{type:String , required:true},
price:{type:String , required:true},
quantity:{type:String , required:true},
date: { type: Date, default: Date.now },
})



module.exports = mongoose.model('productSchema',productSchema)