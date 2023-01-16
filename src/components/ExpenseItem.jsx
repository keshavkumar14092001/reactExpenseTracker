import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
        console.log("Hello from delete functionality")
    };
    return (
        <li className='flex justify-around items-center bg-gray-200 my-8 rounded-md shadow-lg'>
            <div className='w-3/4 flex items-center text-center p-4 text-3xl font-bold tracking-wide text-indigo-900'>
                {props.name}
            </div>
            <div className='w-1/4 flex items-center justify-evenly'>
                <span className='p-2 bg-indigo-900 rounded-md text-xl font-semibold tracking-wide text-white'>
                    ${props.cost}
                </span>
                <TiDelete
                    size='2.2rem'
                    className='text-red-600 hover:cursor-pointer hover:text-red-800 transition'
                    onClick={handleDeleteExpense}
                ></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;