//Expense title, Expense Amount and Date.
import React, { useState } from 'react';

const ExpenseForm = () => {

    const [enterredTitle, setEnteredTitle] = useState('');
    const [enterredPrice, setEnteredPrice] = useState('');
    const [enterredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredDate : '',
    //     enteredPrice: '',
    //     enteredTitle: ''
    // })

    const TitleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : e.target.value
        // })
        // setUserInput((prevState) => {
        //     return{ ...prevState, enteredTitle : e.target.value}
        // })
    }

    const PriceChangeHandler = (e) => {
        setEnteredPrice(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredPrice : e.target.value
        // })
        // setUserInput((prevState) => {
        //     return{ ...prevState, enteredPrice : e.target.value}
        // })
    }
    
    const DateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : e.target.value
        // })
        // setUserInput((prevState) => {
        //     return{ ...prevState, enteredDate : e.target.value}
        // })
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const ExpenseData = {
            title : enterredTitle,
            Price : enterredPrice,
            Date : new Date(enterredDate)
        }
        console.log(ExpenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="add-data">
                <div className="add-descr">
                    <label>Add descr :</label>
                    <input type='text' value={enterredTitle} onChange={TitleChangeHandler}></input>
                </div>
                <div className="add-price">
                    <label>Add price :</label>
                    <input type='number' value={enterredPrice} onChange={PriceChangeHandler}></input>
                </div>
                <div className="add-date">
                    <label>Add Date :</label>
                    <input type='date' value={enterredDate} onChange={DateChangeHandler}></input>
                </div>
            </div>
            <div className="Addbutton">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;

