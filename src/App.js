import "./App.css";
import { useState } from "react";

function App(){
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTodo = () => {
    const newTodo = [...todos, newTask]
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTodo}>Add Task</button> 
      </div>
      <div className="list">
        {todos.map((todo)=>{
          return <h3>{todo}</h3>
        })}
      </div>
    </div>
  );
};

export default App;