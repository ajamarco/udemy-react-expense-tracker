//react
import {useState} from 'react';

//css files
import "../styles/ExpenseItem.css";

//jsx files
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem({ title, date, amount }) {
    const [expenseTitle, setTitle] = useState(title);

    //handle a button click
    //------------------------------
    const handleClick = (e) => {
        setTitle('updated!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">$ {amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
