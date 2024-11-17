import jwt from "jsonwebtoken";

const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(" ")[1];
  if(!token){
    return res.status(401).json({message: "Unauthorized"})
  }
  jwt.verify(token , process.env.JWT_SECRET , (err , user) => {
    if(err){
      return res.status(401).json({message: "Invalid credentials"})
    }
    req.user = user
    next()
  })
}

export default verifyAdminToken