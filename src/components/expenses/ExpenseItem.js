import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{

    const [descr, setTitle] = useState(props.descr);  //destructing
    const clickHandler = () => {
        setTitle('Updated')
        console.log(descr)
    }

    const [price, setPrice] = useState(props.price);  //destructing
    const priceChange = () => {
        setPrice('100')
        console.log(price)
    }

    // const DeleteExpense = () =>{
    //         // let item = this.state.data.filter()
    //         // let item = props.remove(e.ExpenseItem)
    //         // props.remove(item.id)
    //         console.log('Expense deleted successfully...')
    // }

    return (
        <Card className='expenses'>
            
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2>{descr}</h2> 
            {/* expenditurelocation={props.expenditurelocation}  */}
            <ExpenseDetail price={price}></ExpenseDetail> 
            <button onClick={clickHandler}>Change Desc</button>
            {/* <button onClick={DeleteExpense}>Delete</button> */}
            <button onClick={priceChange}>Change Price</button>
        </Card>
        )
}

export default ExpenseItem;