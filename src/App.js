import "./App.css";
import { useState, useEffect } from "react";
import { Task } from "./Task";

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
      completed: false,
    };
    setTodos([...todos, task])
  };
  
  const completeTodo = (id) => {
    setTodos(todos.map((todo)=>{
      if(todo.id === id){
        return{...todos, completed: true};
      }else{
        return todo;
      }
    }))  
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id));
  };
  
  const Text = () => {
    const [text, setText] = useState("");
    
    return(
      <div>
        <input onChange={(e)=>{setText(e.event.target.value)}}/>
        <h2>{text}</h2>
      </div>
    );
  };
  
  useEffect(()=>{
    console.log('Componenet mounted');

    return () => {
      console.log('Component unmounted');
    }
  });
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTodo}>Add Task</button> 
        
        <button>Show Text</button>
        
      </div>
      <div className="list">
        {todos.map((todo)=>{
          return <Task taskName={todo.taskName} id={todo.id} deleteTask={deleteTask} completed={todo.completed} completeTodo={completeTodo}/>
        })}
      </div>
    </div>
  );
};

export default App;