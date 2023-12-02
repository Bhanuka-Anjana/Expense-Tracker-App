import axios from "axios";
import {
  setExpenses,
  setExpensesError,
  newExpense,
  editExpense,
  deleteExpense,
  newExpenseError,
  editExpenseError,
  deleteExpenseError,
} from "../App/expensesSlice";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_BASE_URL}/expenses`,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    authorization: "Bearer" + sessionStorage.getItem("token"),
  };
  return config;
});

export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const { data } = await axiosInstance.get();
    dispatch(setExpenses(data));
  } catch (error) {
    dispatch(setExpensesError());
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    //api call
    const { data } = await axiosInstance.post("", expense);
    dispatch(newExpense(data));
  } catch (error) {
    dispatch(newExpenseError());
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //api call
    const { data } = await axiosInstance.put("", expense);
    dispatch(editExpense(data));
  } catch (error) {
    dispatch(editExpenseError());
  }
};

export const DeleteExpense = async (dispatch, expenseId) => {
  try {
    //api call
    await axiosInstance.delete("", expenseId);
    dispatch(deleteExpense(expenseId));
  } catch (error) {
    dispatch(deleteExpenseError());
  }
};
