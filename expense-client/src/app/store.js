import expensesReducer from "./expensesReducer";
import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    expensesReducer: expensesReducer,
  },
});
