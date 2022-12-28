import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = (props) =>{
    // const expensedate = new Date(2022, 12, 28);
    // const descr = 'petrol';
    // const expenditurelocation = 'pune';
    // const price = 200;

    
    return (
        <div className='expenses'>
            <ExpenseDate date={props.date}></ExpenseDate>    
            <ExpenseDetail descr={props.descr} expenditurelocation={props.expenditurelocation} price={props.price}></ExpenseDetail> 
        </div>
        )
}

export default ExpenseItem;