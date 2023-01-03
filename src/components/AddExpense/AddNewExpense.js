import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";

const AddNEwExpense = (props) => {

    const [isEditing, setIsEditing] = useState();

    const SaveExpenseData = (enteredData) => {
        const  expenseData= {
            ...enteredData,
            id : Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const StartEditingHandler = () => {
        setIsEditing(true)
    }

    const StopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="addExpense">
            { !isEditing && <button onClick={StartEditingHandler}>Add New Expense</button>}
            { isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseData} onCancel={StopEditingHandler}></ExpenseForm>}
        </div>
    )
}

export default AddNEwExpense;
