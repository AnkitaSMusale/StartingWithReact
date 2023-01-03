import './ExpenseDate.css';
import React from 'react';

const ExpenseDate = (props) => {
    const month = props?.date.toLocaleString('en-US',{month : "long"});
    const day = props?.date.toLocaleString('en-US',{day : '2-digit'});
    const year = props?.date.getFullYear();
    console.log(month+1)
    
    return (
        <div className='expense-date'><h3>
            <div className='year'>{year}</div>  
            <div className='month'>{month}</div>
            <div className='day'>{day}</div>  
        </h3></div>
        
    )
}

export default ExpenseDate;

