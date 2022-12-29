import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import Card from '../UI/Card';

const ExpenseItem = (props) =>{
    return (
        <Card className='expenses'>
            <ExpenseDate date={props.date}></ExpenseDate>    
            <ExpenseDetail descr={props.descr} expenditurelocation={props.expenditurelocation} price={props.price}></ExpenseDetail> 
        </Card>
        )
}

export default ExpenseItem;