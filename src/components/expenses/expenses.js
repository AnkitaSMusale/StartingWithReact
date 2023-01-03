import React from 'react';
import ExpenseItem from './ExpenseItem';
//import ExpenseDate from './ExpenseDate';
//import React, {useState} from 'react';

const Expenses = (props) => {

    return(
        <div>
          {props.items.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            descr = {expense.descr}
            date = {expense.date}
            price = {expense.price}
            />
          ))
          }
          {/* <ExpenseItem 
            descr = {props.items[0].descr}
            date = {props.items[0].date}
            price = {props.items[0].price}
            expenditurelocation = {props.items[0].expenditurelocation}
          ></ExpenseItem>
      <ExpenseItem
      descr = {props.items[1].descr}
      date = {props.items[1].date}
      price = {props.items[1].price}
      expenditurelocation = {props.items[1].expenditurelocation}
      ></ExpenseItem>
      <ExpenseItem 
        descr = {props.items[2].descr}
        date = {props.items[2].date}
        price = {props.items[2].price}
        expenditurelocation = {props.items[2].expenditurelocation}
      ></ExpenseItem>
      <ExpenseItem 
        descr = {props.items[3].descr}
        date = {props.items[3].date}
        price = {props.items[3].price}
        expenditurelocation = {props.items[3].expenditurelocation}
    ></ExpenseItem> */}
    {/* for(let i=0; i<expense.length; i++){
        <ExpenseItem 
        descr = {expense[i].descr}
        date = {expense[i].date}
        price = {expense[i].price}
        expenditurelocation = {expense[i].expenditurelocation}
        ></ExpenseItem>
      } */}
        </div>
    )

}

export default Expenses;


     