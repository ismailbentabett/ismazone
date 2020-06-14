const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/visitor/product')
const userRoute = require('./routes/user/user')
 require('dotenv').config()



 const app = express()
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/auth',authRoute)
app.use('/',productRoute)
app.use('/user',userRoute.user)



mongoose.connect(process.env.DB ,{ useUnifiedTopology: true , useNewUrlParser: true}, ()=>{
    console.log(`connected to the DATABASE`)
})








 app.listen(port , (err)=>{
     if(err){
            console.log(err)
     }else{
        console.log(`connected on port ${port}`)
     }
 })

