import { configureStore } from "@reduxjs/toolkit";

import authSlice, { authActions } from "./auth-slice";
import inventorySlice from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    inventory: inventorySlice.reducer,
  },
});
export default store;
