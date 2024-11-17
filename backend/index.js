import express from 'express';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
import connectDB from './src/database/ConnectDB.js';
import bookRoutes from './src/books/book.route.js';
import orderRoutes from './src/orders/order.route.js';
dotenv.config();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

const port = process.env.PORT || 5000;
connectDB()

app.use("/api/books" , bookRoutes)
app.use("/api/orders" , orderRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})