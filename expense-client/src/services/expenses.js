import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const expenses = [
      { id: 1, description: "Groceries", amount: 23.16 },
      { id: 2, description: "Gas", amount: 23.16 },
      { id: 3, description: "Loan", amount: 23.16 },
      { id: 4, description: "Travel", amount: 23.16 },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error!");
  }
};
