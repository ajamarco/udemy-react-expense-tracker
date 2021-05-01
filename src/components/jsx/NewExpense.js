//react importing
import React from 'react'

//styles
import '../styles/NewExpense.css'

//components
import ExpenseForm from './ExpenseForm'

const NewExpense = ({onAddNewExpense}) => {
    const handleSaveExpenseData = (data) => {
        const id = Math.random();
        onAddNewExpense({...data, id: id});
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={handleSaveExpenseData}/>
        </div>
    )
}

export default NewExpense