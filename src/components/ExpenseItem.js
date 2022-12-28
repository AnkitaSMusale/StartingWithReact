import './ExpenseItem.css';

function ExpenseItem(props){
    // const expensedate = new Date(2022, 12, 28);
    // const descr = 'petrol';
    // const expenditurelocation = 'pune';
    // const price = 200;

    const month = props.date.toLocaleString('en-US',{month : 'long'});
    const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expenses'>
            <div className='expense-item'><h3>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
                </h3></div>
            <div className='expense-item_description'><h3>{props.descr}</h3></div>
            <div className='expense-item_location'><h3>{props.expenditurelocation}</h3></div>
            <div className='expense-item_price'><h3>${props.price}</h3></div>
        </div>
        )
}

export default ExpenseItem;