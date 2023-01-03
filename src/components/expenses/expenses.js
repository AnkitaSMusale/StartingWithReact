import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
//import ExpenseDate from './ExpenseDate';

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2022')

    const yearSelectHandler = (year) => {
        setfilteredYear(year);
        console.log(filteredYear);
    }

    const FilteredExpense = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear ;
    });

    return(
        <div>
          <ExpensesFilter selectedYear={filteredYear} onYearSelect={yearSelectHandler} />
          {FilteredExpense.length === 0 && <p>No data found !!</p>}
          {FilteredExpense.length > 0 && 
          FilteredExpense.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            descr = {expense.descr}
            date = {expense.date}
            price = {expense.price}
            />
          ))}

          {FilteredExpense.length ===1 && 
          FilteredExpense.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            descr = {expense.descr}
            date = {expense.date}
            price = {expense.price}
            />
          ))  &&
          <p>Only Single Item Found ! Please add more items </p>
          }

        
        </div>
    )

}

export default Expenses;


     