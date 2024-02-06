import React from 'react'

const InputTodo = ({todo,setTodo,addTodo}) => {
  return (
    <div className="flex justify-center my-5">
          <input
            type="text"
            placeholder="Add a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="p-2 rounded-md"
          />
          <button
            onClick={addTodo}
            className="bg-[#C7B7A3] p-2 rounded-md text-[#561C24] font-bold"
          >
            Add
          </button>
        </div>
  )
}

export default InputTodo