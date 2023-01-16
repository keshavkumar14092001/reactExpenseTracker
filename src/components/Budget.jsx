import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {

    const { budget } = useContext(AppContext);

    return (
        <div className='text-center py-4 px-4 bg-red-600 rounded-md shadow-md text-xl text-white font-bold tracking-wide border'>
            <p className='inline'>Budget : </p>
            <span>${budget}</span>
        </div>
    )
}

export default Budget;