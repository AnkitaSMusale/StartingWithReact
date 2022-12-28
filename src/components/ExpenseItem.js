import './ExpenseItem.css';

function ExpenseItem(){
    const expensedate = new Date(2022, 12, 28);
    const descr = 'petrol';
    const expenditurelocation = 'pune';
    const price = 200;
    return (
        <div className='expenses'>
            <div className='expense-item'><h3>{expensedate.toISOString()}</h3></div>
            <div className='expense-item_description'><h3>{descr}</h3></div>
            <div className='expense-item_location'><h3>{expenditurelocation}</h3></div>
            <div className='expense-item_price'><h3>${price}</h3></div>
        </div>
        )
}

export default ExpenseItem;