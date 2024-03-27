const users=require('../Model/user.model')

exports.register=async(req,res)=>{
    const{username,password,email}=req.body
    console.log(username,password,email);
   try {
    //check email is present in db
    const existinguser=await users.findOne({email})
    //if email  is present then existing user
    if(existinguser){
        res.status(406).json("user already exists")
    }
    else{
        const newUser=new users({
            username,email,password,github:"",
            linkedin:"",profile:""
        })
        //to store data to mongodb from mongoose  model
        await newUser.save()
        res.status(200).json(newUser)
    }  
   } catch (error) {
    res.status(401).json(error)  
   }
}