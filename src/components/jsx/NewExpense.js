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
        onAddNewExpense({ ...data, id: id });
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
