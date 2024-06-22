import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {  // addTodoHandler aek event get karta he
        e.preventDefault()
        dispatch(addTodo(input)) // sirf input value send karna he reducer ko, action .payload id & text automatic access karlega reducer me
        setInput('')  // submit karne ke bad form input field ko clean karta he for better user experience
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter Your Note..."
        value={input}
        onChange={(e) => setInput(e.target.value)} // setInput methos user ka todo ko "input" me dalta he
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Note
      </button>
    </form>
  )
}

export default AddTodo