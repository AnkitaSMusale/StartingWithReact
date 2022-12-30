//Expense title, Expense Amount and Date.
import React, { useState } from 'react';

const ExpenseForm = () => {

    // const [enterredTitle, setEnteredTitle] = useState('');
    // const [enterredPrice, setEnteredPrice] = useState('');
    // const [enterredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredDate : '',
        enteredPrice: '',
        enteredTitle: ''
    })

    const TitleChangeHandler = (e) => {
        // setEnteredTitle(e.target.value)
        setUserInput({
            ...userInput,
            enteredTitle : e.target.value
        })
    }

    const PriceChangeHandler = (e) => {
        //setEnteredPrice(e.target.value)
        setUserInput({
            ...userInput,
            enteredPrice : e.target.value
        })
    }
    
    const DateChangeHandler = (e) => {
        //setEnteredDate(e.target.value)
        setUserInput({
            ...userInput,
            enteredDate : e.target.value
        })
    }
    return (
        <form>
            <div className="add-data">
                <div className="add-descr">
                    <label>Add descr :</label>
                    <input type='text' onChange={TitleChangeHandler}></input>
                </div>
                <div className="add-price">
                    <label>Add price :</label>
                    <input type='number' onChange={PriceChangeHandler}></input>
                </div>
                <div className="add-date">
                    <label>Add Date :</label>
                    <input type='date' onChange={DateChangeHandler}></input>
                </div>
            </div>
            <div className="Addbutton">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;

