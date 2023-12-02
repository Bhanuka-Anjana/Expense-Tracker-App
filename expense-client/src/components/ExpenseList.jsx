import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";

export default function ExpenseList() {
  const dispatch = useDispatch();
  const expense = useSelector(state=>state.expensesSlice.expenses)
  useEffect(() => {
    GetExpenses(dispatch);
  }, []);
  return "Expenses App";
}
