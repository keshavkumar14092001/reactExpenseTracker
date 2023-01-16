import Budget from "./components/Budget"
import Remaining from "./components/Remaining"
import SpentSoFar from "./components/SpentSoFar"
import ExpenseList from "./components/ExpenseList"
import AddExpenseForm from "./components/AddExpenseForm"
import { AppProvider } from './context/AppContext'

export default function App() {
  return (
    <AppProvider>
      <div className="container mx-auto">
        <h1 className="text-center py-8 text-5xl font-bold tracking-wide text-gray-700">Expense Tracker</h1>
        <div className="flex items-center justify-around my-8">
          <div className="w-[20%]">
            <Budget />
          </div>
          <div className="w-[20%]">
            <Remaining />
          </div>
          <div className="w-[20%]">
            <SpentSoFar />
          </div>
        </div>
        <h1 className="text-center text-4xl font-bold tracking-wide text-gray-800 mt-16">Expenses</h1>
        <div className="flex items-center justify-around py-8">
          <ExpenseList />
        </div>
        <h1 className="text-center text-4xl font-bold tracking-wide text-gray-800 mt-10">Add Expense Form</h1>
        <div className="flex items-center justify-around py-8">
          <AddExpenseForm />
        </div>
      </div>
    </AppProvider>
  )
}