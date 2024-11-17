import Order from "./order.model.js"

export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body)
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (error) {
    console.log("Error in creating order" , error)
    res.status(500).json({message: "Failed to create order"})
  }
}

export const getOrderByEmail = async (req, res) => {
  try {
    const {email} = req.params
    const orders = await Order.find({email}).sort({createdAt: -1})
    if(!orders) {
      return res.status(404).json({message: "Order not found"})
    }
    res.status(200).json(orders)
  } catch (error) {
    console.log("Error in getting order by email" , error)
    res.status(500).json({message: "Failed to get order by email"})
  }
}