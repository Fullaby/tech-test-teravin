if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const express= require('express');
const errorHandler = require('./middlewares/errorHandler');
const app= express()
const port= process.env.PORT || 3000 
const Router= require('./Routes/index');
const cors= require('cors');

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',Router)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Connected to Port ${port}`)
})