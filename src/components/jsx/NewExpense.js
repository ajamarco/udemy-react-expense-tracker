//react importing
import React, {useState} from "react";

//styles
import "../styles/NewExpense.css";

//components
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddNewExpense}) => {
        //state to control if add new expense form is showing / hidden
        const [showForm, setShowForm] = useState(false);

    const handleSaveExpenseData = (data) => {
        const id = Math.random();
        
        const newExpenseObj = {
            "new-expense-title": data["new-expense-title"],
            "new-expense-amount": +data["new-expense-amount"],
            "new-expense-date": data["new-expense-date"],
            id: id
        }
        // console.log("object new ",newExpenseObj);
        // console.log("old data",data);
        onAddNewExpense(newExpenseObj);
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    let content = <button onClick={handleShowForm}>Add New Expense</button>
    if(showForm === true) {
        content = <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onChangeShowForm={handleShowForm}/>;
    }

    return (
        <div className="new-expense">
            {content}
        </div>
    );
};

export default NewExpense;
