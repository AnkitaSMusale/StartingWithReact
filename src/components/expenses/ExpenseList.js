import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if(props.items.length ===0){
        return <h2>No Data Found !!!</h2>
    }

    if(props.items.length ===1){
        return (
            <div>
                <ExpenseItem 
                  key={props.items[0].id}
                  descr = {props.items[0].descr}
                  date = {props.items[0].date}
                  price = {props.items[0].price}
                />
                <h2>Only Single Item Found ! Please add more items </h2>
            </div>
        )
    }

    return (
        <ul className='expenses-list'>
            {props.items.map(item => 
            <ExpenseItem 
                key={item.id} 
                descr={item.descr} 
                price={item.price} 
                date={item.date}
            />)}
        </ul>
    )

}

export default ExpenseList;