import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

import Card from '../UI/Card';

const ExpenseItem = (props) =>{
    const clickHandler = () => {
        console.log('clicked...')
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
            <h2>{props.descr}</h2> 
            {/* expenditurelocation={props.expenditurelocation}  */}
            <ExpenseDetail price={props.price}></ExpenseDetail> 
            <button onClick={clickHandler}>Change Desc</button>
            <button onClick={DeleteExpense}>Delete</button>
        </Card>
        )
}

export default ExpenseItem;