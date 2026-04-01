const bcrypt= require('bcrypt');
const userService = require('../services/auth.services');

const register=async (req , res)=>{
  try{
    const {name , email ,password}= req.body;

    const existingUser =await userService.finduserbyemail(email);
    if(existingUser){
      return res.status(400).json({message: 'User already exists'})
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user =await userService.createuser({name, email,password: hashedPassword});
     return res.status(201).json({message: 'User registered successfully', user})

  }catch(error){
    return res.status(500).json({message: 'Internal server error'})
  }
}

module.exports= {register}