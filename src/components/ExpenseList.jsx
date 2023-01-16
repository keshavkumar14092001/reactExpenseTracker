import { useContext } from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    return (
        <ul className='w-[45%]'>
            {
                expenses.map((expense) => (
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                ))
            }
        </ul>
    )
}

export default ExpenseList;