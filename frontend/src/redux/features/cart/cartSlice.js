import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers:{
    addToCart: (state , action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if(!existingItem){
        state.cartItems.push(action.payload);
        toast.success("Product added to cart");
      } else {
        toast.error("Product is already in cart")
      }
    },

    removeFromCart: (state , action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload)
    },
    clearCart : (state) => {
      state.cartItems = [];
    }
  }
});

export const { addToCart , removeFromCart , clearCart} = cartSlice.actions;

export default cartSlice.reducer;