import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseList />
      <ExpenseListFilter />
    </div>
  );
};

export default ExpenseDashboardPage;
