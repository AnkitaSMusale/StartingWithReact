import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    // const expensedate = new Date(2022, 12, 28);
    // const descr = 'petrol';
    // const expenditurelocation = 'pune';
    // const price = 200;

    
    return (
        <div className='expenses'>
            
            <ExpenseDate date={props.date}></ExpenseDate>    
            <div className='expense-item_description'><h3>{props.descr}</h3></div>
            <div className='expense-item_location'><h3>{props.expenditurelocation}</h3></div>
            <div className='expense-item_price'><h3>${props.price}</h3></div>
        </div>
        )
}

export default ExpenseItem;