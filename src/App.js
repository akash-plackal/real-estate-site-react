import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/new expenses/NewExpenses";

const sample_expenses = [
  {
    id: "e1",
    title: "News Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseArr, setExpenseArr] = useState(sample_expenses);

  const addExpenseHandler = (ex) => {
    setExpenseArr((a) => {
      return [ex, ...a];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseArr} />
    </div>
  );
}

export default App;
