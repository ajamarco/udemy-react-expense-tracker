import { useState } from "react";
import ExpenseFilter from "./components/jsx/ExpenseFilter";
import Expenses from "./components/jsx/Expenses";
import NewExpense from "./components/jsx/NewExpense";
import Card from "./components/jsx/Card";

function App(props) {

    //expenses state and initial value
    const [expenses, setExpenses] = useState([
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);

    //initial year filter 
    const [filteredYear, setFilteredYear] = useState("2019");

    //handle change for the filtered year
    //-----------------------------------------------
    const handleFilterChange = (filteredValue) => {
        setFilteredYear(filteredValue);
    };

    //handle adding new expense
    //-----------------------------------------------
    const handleAddNewExpense = (expense) => {
        const title = expense["new-expense-title"];
        const amount = expense["new-expense-amount"];
        const date = new Date(expense["new-expense-date"]);
        const id = expense["id"];

        setExpenses((prevState) => {
            return [
                {
                    id: id,
                    title: title,
                    amount: amount,
                    date: date,
                },
                ...prevState,
            ];
        });
    };

    return (
        <div>
            <NewExpense onAddNewExpense={handleAddNewExpense} />
            <Card className="expenses">
                <ExpenseFilter currentYearSelected={filteredYear} onChangeFilter={handleFilterChange} />

                {expenses
                    .filter(
                        (e) => e.date.getFullYear().toString() === filteredYear
                    )
                    .map((e) => {
                        return (
                            <Expenses
                                title={e.title}
                                amount={e.amount}
                                date={e.date}
                                key={e.id}
                            ></Expenses>
                        );
                    })}
            </Card>
        </div>
    );
}

export default App;