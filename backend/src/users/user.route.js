import express from "express";
import User from "./user.model.js";
import jwt from "jsonwebtoken"

const router = express.Router();

router.post("/admin" , async (req , res) => {
  const {username , password} = req.body
  try {
    const admin = await User.findOne({username})
    if(!admin) return res.status(404).json({message: "Admin not found"})

  if(admin.password !== password){
    return res.status(401).json({message: "Invalid credentials"})
  }
  const token = jwt.sign({id: admin._id , username: admin.username , role: admin.role} , process.env.JWT_SECRET , {expiresIn: "1d"})
  return res.status(200).json({
    message: "Authenticated as admin" ,
    token: token,
    user:{
      username: admin.username,
      role: admin.role
    }
  })
  } catch (error) {
    console.log("Failed to login as admin" , error)
    res.status(500).json({message: "Failed to login as admin"})
  }
})

export default router