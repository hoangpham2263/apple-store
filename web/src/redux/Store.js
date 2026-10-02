import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import cartSliceReducer from "./cartSlice";

const Store = configureStore({
  reducer: {
    user: userSliceReducer,
    cart: cartSliceReducer,
  },
});

export default Store;
