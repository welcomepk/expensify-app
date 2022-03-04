import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h3>Expense List</h3>
      {expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
