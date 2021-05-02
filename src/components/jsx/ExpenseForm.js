import React, { useState, useEffect } from "react";
import "../styles/ExpenseForm.css";

const ExpenseForm = (props) => {

    useEffect(() => {
        document.getElementById('new-expense-title').focus();
    }, [])

    const [newExpense, setNewExpense] = useState({
        "new-expense-title": "",
        "new-expense-amount": "",
        "new-expense-date": "",
    });

    const handleInputChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.id;
        setNewExpense((prevState) => {
            return {
                ...prevState,
                [inputName]: value,
            };
        });
        // setNewExpense({...newExpense, [inputName]: value});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        setNewExpense({
            "new-expense-title": "",
            "new-expense-amount": "",
            "new-expense-date": "",
        });
        props.onSaveExpenseData(newExpense);

        props.onChangeShowForm();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={handleInputChange}
                        id="new-expense-title"
                        value={newExpense["new-expense-title"]}
                        autoFocus
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={handleInputChange}
                        id="new-expense-amount"
                        value={newExpense["new-expense-amount"]}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        id="new-expense-date"
                        onChange={handleInputChange}
                        value={newExpense["new-expense-date"]}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={props.onChangeShowForm}>Cancel</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
