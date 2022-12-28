import './ExpenseDetail.css';

function ExpenseDetail(props){
    return (
        <div className='expense-detail'>
        <div className='expense-item_description'><h3>{props.descr}</h3></div>
        <div className='expense-item_location'><h3>{props.expenditurelocation}</h3></div>
        <div className='expense-item_price'><h3>${props.price}</h3></div>
        </div>
    )
}

export default ExpenseDetail;

