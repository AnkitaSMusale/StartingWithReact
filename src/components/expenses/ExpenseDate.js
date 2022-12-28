import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month : 'long'});
    const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'><h3>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>  
            <div className='day'>{day}</div>  
        </h3></div>
        
    )
}

export default ExpenseDate;

