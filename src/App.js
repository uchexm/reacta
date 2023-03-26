import "./App.css";
import Axios  from "axios";
import { useState, useEffect } from "react";

// fetch("https://catfact.ninja/fact").then((res)=>{res.json().then((data)=>{console.log(data);})});*/


function App() {
  const [catFact, setCatFact] = useState("");
  
  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res)=>{
    setCatFact(res.data.fact)
    });
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="App">
      <button>Generate Cat Fact (fetch) </button>
      <button onClick={fetchFact}>Generate Cat Fact (axios) </button>
      <p>{catFact}</p>
    </div>
  );

};

export default App;