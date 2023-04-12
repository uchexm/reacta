import "./App.css";
import { useState } from "react";

function App(){
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTodo = () => {
    const task = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      taskName: newTask,
    };
    setTodos([...todos, task])
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTodo}>Add Task</button> 
      </div>
      <div className="list">
        {todos.map((todo)=>{
          return (
            <div>
              <h3>{todo.taskName}</h3>
              <button onClick={()=>deleteTask(todo.id)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default App;