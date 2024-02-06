import { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo === "") return alert("Please enter a todo");
    setTodoList([{ text: todo, read: false },...todoList, ]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const toggleRead = (index) => {
    let newTodoList = [...todoList];
    newTodoList[index].read = !newTodoList[index].read;
    setTodoList(newTodoList);
  };

  const editTodo=(index,e)=>{
    let newTodoList = [...todoList];
    newTodoList[index].text = e.target.value;
    setTodoList(newTodoList);
  }
  return (
    <>
      <Header/>
      <div className="flex flex-col justify-evenly bg-[#6D2932]">
        <InputTodo todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        <div className="flex flex-col items-center">
          <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleRead={toggleRead} setTodoList={setTodoList} editTodo={editTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
