import '../styles/ExpenseDate.css'

//component to handle showing date
function ExpenseDate({ date }) {
    //formated month/day/year
    const formatedMonth = date.toLocaleString("en-US", { month: "long" });
    const formatedDay = date.toLocaleString("en-US", { day: "2-digit" });
    const formatedYear = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{formatedMonth}</div>
            <div className="expense-date__day">{formatedDay}</div>
            <div className="expense-date__year">{formatedYear}</div>
        </div>
    );
}

export default ExpenseDate;
