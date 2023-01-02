//Expense title, Expense Amount and Date.

import ExpenseForm from "./ExpenseForm";

const AddNEwExpense = (props) => {

    const SaveExpenseData = (enteredData) => {
        const  expenseData= {
            ...enteredData,
            id : Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData)
    }

    return (
        <div className="addExpense">
            <ExpenseForm onSaveExpenseData={SaveExpenseData}></ExpenseForm>
        </div>
    )
}

export default AddNEwExpense;
