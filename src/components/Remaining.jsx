import { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = () => {

    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className='text-center py-4 px-4 bg-green-600 rounded-md shadow-md text-xl text-white font-bold tracking-wide border'>
            <p className='inline'>Remaining : </p>
            <span>${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining;