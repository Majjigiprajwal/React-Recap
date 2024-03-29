import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [expenseForm,setExpenseForm] = useState(false)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

   const handleClick = ()=>{
       setExpenseForm(true)
   }

 
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      {expenseForm ?<NewExpense onAddExpense={addExpenseHandler} /> : <button className="text-2xl rounded-lg bg-violet-400 border border-black flex items-center justify-center " onClick={handleClick}>Add Expense</button>}
      <Expenses items={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default App;
