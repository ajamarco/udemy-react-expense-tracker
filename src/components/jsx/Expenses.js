import "../styles/Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ title, amount, date }) {
    return (
        <li>
            <div className="expenses">
                <ExpenseItem title={title} amount={amount} date={date} />
            </div>
        </li>
    );
}

export default Expenses;
