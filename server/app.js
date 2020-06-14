const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
 require('dotenv').config()



 const app = express()
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))









 app.listen(port , (err)=>{
     if(err){
            console.log(err)
     }else{
        console.log(`connected on port ${port}`)
     }
 })




