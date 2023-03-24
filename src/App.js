import "./App.css";
import Axios  from "axios";
import { useState, useEffect } from "react";

function App() {
 //const [excuse, setExcuse] = useState("");
  const [getExcuse, setGetExcuse] = useState("");
  const fetchExcuse = (excuse) =>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
      setGetExcuse(res.data[0].excuse);
    });
  };
  
  return (
    <div className="App">
      <h1>Random Excuse to use</h1>
      <button onClick={()=>{fetchExcuse("party")}}>Party</button>
      <button onClick={()=>{fetchExcuse("family")}}>Family</button>
      <button onClick={()=>{fetchExcuse("office")}}>Office</button>
      <p>{getExcuse}</p>
    </div>
  );

};

export default App;