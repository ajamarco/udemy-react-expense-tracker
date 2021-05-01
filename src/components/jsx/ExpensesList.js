import React from "react";
import Expenses from "./Expenses";

import "../styles/ExpensesList.css";

const ExpensesList = ({ expenses }) => {
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses for Current Year</h2>
    }

    return (
        <ul className="expenses-list">
            {expenses.map((e) => (
            <Expenses
                title={e.title}
                amount={e.amount}
                date={e.date}
                key={e.id}
            ></Expenses>
            ) )}
        </ul>
    );
};

export default ExpensesList;
