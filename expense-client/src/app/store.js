import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";
import authenticationSlice from "./authenticationSlice";

export default configureStore({
  reducer: {
    expensesSlice: expensesSlice,
    authenticationSlice: authenticationSlice,
  },
});
