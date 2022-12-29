// import logo from './logo.svg';
import './App.css';
import ExpenseItem  from './components/expenses/ExpenseItem';
import AddNEwExpense from './components/AddExpense/AddNewExpense';
const App = () => {
  const expense = [
    {id: '01', descr:'petrol',date : new Date(2022,12,28), price : 200 , expenditurelocation:'pune'},
    {id: '02', descr:'pizza',date : new Date(2022,12,29), price : 300, expenditurelocation:'mumbai'},
    {id: '03', descr:'flower',date : new Date(2022,12,30), price : 400, expenditurelocation:'bangalore'},
    {id: '04',descr:'book',date : new Date(2022,12,31), price : 500, expenditurelocation:'solapur'}
  ];

  return (
    <div className='main'>
      {/* <h2>This is Ankita</h2>
      <p>Hello , Welcome</p> */}
      <AddNEwExpense></AddNEwExpense>
      <h2>Expense Item !</h2>
      {/* for(let i=0; i<expense.length; i++){
        <ExpenseItem 
        descr = {expense[i].descr}
        date = {expense[i].date}
        price = {expense[i].price}
        expenditurelocation = {expense[i].expenditurelocation}
        ></ExpenseItem>
      } */}
       <ExpenseItem 
        descr = {expense[0].descr}
        date = {expense[0].date}
        price = {expense[0].price}
        expenditurelocation = {expense[0].expenditurelocation}
      ></ExpenseItem>
      <ExpenseItem
      descr = {expense[1].descr}
      date = {expense[1].date}
      price = {expense[1].price}
      expenditurelocation = {expense[1].expenditurelocation}
      ></ExpenseItem>
      <ExpenseItem 
        descr = {expense[2].descr}
        date = {expense[2].date}
        price = {expense[2].price}
        expenditurelocation = {expense[2].expenditurelocation}
      ></ExpenseItem>
      <ExpenseItem 
        descr = {expense[3].descr}
        date = {expense[3].date}
        price = {expense[3].price}
        expenditurelocation = {expense[3].expenditurelocation}
    ></ExpenseItem>
    </div>
    
  );
}

export default App;
