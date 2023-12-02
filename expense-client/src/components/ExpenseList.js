import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetExpenses } from "../services/expenses";

export default function ExpenseList() {
  const dispatch = useDispatch();
  useEffect(() => {
    GetExpenses(dispatch);
  }, []);
  return "Expenses App";
}
