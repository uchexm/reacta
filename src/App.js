import "./App.css";
import Axios  from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState({});
  const fetchAge = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data);
    });
  };
  
  return (
    <div className="App">
      <input onChange={(e)=>{setName(e.target.value);}}/>
      
      <button onClick={fetchAge}>Predict Age</button>
      <h3>Name: {predictedAge?.name}</h3>
      <h3>Predicted Age: {predictedAge?.age}</h3>
      <h3>Count: {predictedAge?.count}</h3>
      <p></p>
    </div>
  );

};

export default App;