require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./db/connection')
//create ann express application 
const pfServer=express()

//use cors in express
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)


const PORT=3000||process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project fair server started at PORT ${PORT}`);
})
pfServer.get('/',(req,res)=>{
    res.status(200).send("client server")
})
