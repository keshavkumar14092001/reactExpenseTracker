import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const SpentSoFar = () => {

    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='text-center py-4 px-4 bg-indigo-600 rounded-md shadow-md text-xl text-white font-bold tracking-wide border'>
            <p className='inline'>SpendingSoFar : </p>
            <span>${totalExpenses}</span>
        </div>
    )
}

export default SpentSoFar;