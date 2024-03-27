const express=require('express')
const router=new express.Router()
const userController=require('../Controller/user.Controller')
router.post('/register',userController.register)
module.exports=router