import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventoryList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToInventory(state, action) {
      const newItem = action.payload;

      //A function to check if an existing item is available
      const existingItem = state.inventoryList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
        state.inventoryList.push({
          id: newItem.id,
          product: newItem.product,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      }
    },
    removeFromInventory() {},
    setShowCart() {
      state.showCart = true;
    },
  },
});
export const inventoryActions = inventorySlice.actions;
export default inventorySlice;
