import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from './src/database/ConnectDB.js';
dotenv.config();

const port = process.env.PORT || 5000;
connectDB()

app.use('/' , (req,res) => {
  res.send("Hello from backend")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})