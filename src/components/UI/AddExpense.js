import React, { useState } from 'react';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const addExpense = () => {
    // Implement your logic for adding expense, you can use 'expense' state here
    console.log('Expense added:', expense);
    // Reset the form after adding the expense
    setExpense({
      title: '',
      amount: '',
      date: ''
    });
  };

  return (
    <div className="mt-10 mb-10 ml-5">
      <input
        type="text"
        name="title"
        value={expense.title}
        onChange={(e) => handleOnChange(e)}
        className="border border-black text-black p-2"
        placeholder="Expense Title"
      />
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={(e) => handleOnChange(e)}
        className="border border-black text-black p-2"
        placeholder="Expense Amount"
      />
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={(e) => handleOnChange(e)}
        className="text-black p-2"
        placeholder="Expense Date"
      />
      <button onClick={addExpense} className="bg-blue-500 text-white p-2 rounded">
        Add Expense
      </button>
    </div>
  );
};

export default AddExpense;

