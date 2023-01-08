import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventoryList: [],
    totalQuantity: 0,
    showInventory: false,
  },
  reducers: {
    addToInventory(state, action) {
      const newItem = action.payload;
      state.inventoryList.push({
        id: newItem.id,
        product: newItem.product,
        price: Number(newItem.price),
        quantity: Number(newItem.quantity),
        totalPrice: Number(newItem.price),
      });
      //   A function to check if an existing item is available
      //   const existingItem = state.inventoryList.find(
      //     (item) => item.id === newItem.id
      //   );

      //   if (existingItem) {
      //     existingItem.quantity++;
      //     existingItem.price += newItem.price;
      //   } else {
      //
      //   }
    },
    addToItems(state, action) {
      const id = action.payload;
      const item = state.inventoryList.find((item) => item.id === id);
      item.quantity++;
    },

    removeFromInventory(state, action) {
      const id = action.payload;
      const item = state.inventoryList.find((item) => item.id === id);
      item.quantity < 1
        ? (state.inventoryList = state.inventoryList.filter(
            (invent) => invent.id !== item.id
          ))
        : item.quantity--;
    },
    setShowInventory(state) {
      state.showInventory = !state.showInventory;
    },
  },
});
export const inventoryActions = inventorySlice.actions;
export default inventorySlice;
