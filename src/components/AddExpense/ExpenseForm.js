//Expense title, Expense Amount and Date.

const ExpenseForm = () => {

    const AddChangeHandler = (e) => {
        console.log(e.target.value)
        //console.log('Changed')
    }
    return (
        <form>
            <div className="add-data">
                <div className="add-descr">
                    <label>Add descr :</label>
                    <input type='text' onChange={AddChangeHandler}></input>
                </div>
                <div className="add-price">
                    <label>Add price :</label>
                    <input type='number' onChange={AddChangeHandler}></input>
                </div>
                <div className="add-date">
                    <label>Add Date :</label>
                    <input type='date' onChange={AddChangeHandler}></input>
                </div>
            </div>
            <div className="Addbutton">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;

