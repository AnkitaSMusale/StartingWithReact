import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import Card from '../UI/Card';

const ExpenseItem = (props) =>{

    const [descr, setTitle] = useState(props.descr);  //destructing
    // let descr = props.descr;
    const clickHandler = () => {
        setTitle('Updated')
        // descr = 'Updated';
        console.log(descr)
    }

    const DeleteExpense = () =>{
            // let item = this.state.data.filter()
            // let item = props.remove(e.ExpenseItem)
            // props.remove(item.id)
            console.log('Expense deleted successfully...')
    }

    return (
        <Card className='expenses'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2>{descr}</h2> 
            {/* expenditurelocation={props.expenditurelocation}  */}
            <ExpenseDetail price={props.price}></ExpenseDetail> 
            <button onClick={clickHandler}>Change Desc</button>
            <button onClick={DeleteExpense}>Delete</button>
        </Card>
        )
}

export default ExpenseItem;