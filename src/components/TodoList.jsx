import React, { useState } from "react";

const TodoList = ({
  todoList,
  deleteTodo,
  toggleRead,
  setTodoList,
  editTodo,
}) => {
  console.log(todoList);

  return (
    <>
      {todoList.map((todo, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between w-[50%] bg-white p-2 my-2 rounded-md"
        >
          <input
            type="text"
            value={todo.text}
            onChange={(e) => {
             editTodo(index,e);

            }}
            className="text-white bg-black p-3 rounded-md"
          />
          <div className="bg-white">
            <button
              onClick={() => deleteTodo(index)}
              className="text-[#561C24] font-bold border-2 border-[#561C24] p-1 rounded-md mr-2"
            >
              Delete 🧺
            </button>
            <button
              onClick={() => toggleRead(index)}
              className="text-[#561C24] font-bold border-2 border-[#561C24] p-1 rounded-md mr-2"
            >
              {todo.read ? "Unread❌" : "Read👍"}
            </button>

            <button
              onClick={() => editTodo(index,e)}
              className="text-[#561C24] font-bold border-2 border-[#561C24] p-1 rounded-md mr-2"
            >
              Edit📝
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
