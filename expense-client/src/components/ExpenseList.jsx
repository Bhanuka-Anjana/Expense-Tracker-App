import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import ListRow from './ListRow';

export default function ExpenseList() {
  const dispatch = useDispatch();
  const expenses = useSelector(state=>state.expensesSlice.expenses);
  useEffect(() => {
    GetExpenses(dispatch);
  }, []);
  return expenses.map(ex =><div key={ex.id} style={{marginBottom: '1rem'}}>
    <ListRow expense={ex}/>
  </div>)
}
