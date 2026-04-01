const prisma = require('../config/db')


const createuser = async (data)=>{

  try{
    return await prisma.user.create({data})

  }catch(error){
    throw new Error('Error creating user')
  }
}

const finduserbyemail = async (email)=>{
  try{
    return await prisma.user.findUnique({where: {email}})
  }catch(error){
    throw new Error('Error finding user by email')
  }
}
module.exports ={
  createuser,
  finduserbyemail
}