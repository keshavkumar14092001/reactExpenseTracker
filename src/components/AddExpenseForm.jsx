import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <form className="w-full max-w-lg" onSubmit={onSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                        htmlFor='name'
                    >
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        required="required"
                        placeholder="Name Of Expense" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                        htmlFor="cost"
                    >
                        Cost
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        type="text"
                        required="required"
                        placeholder="Cost Of Expense" />
                </div>
                <div className="w-full flex items-center justify-center">
                    <button
                        className="w-[95%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Expense
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;