function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const locationOfExpense = 'india'

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
        <div className='expense-item__description'>{locationOfExpense}</div>
      </div>
    </div>
  );
  }
  
  export default ExpenseItem;