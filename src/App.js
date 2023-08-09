import "./App.css";
import { useState } from "react";

function App(){
  const [colorText, setColorText] = useState("blue");
  
  return(
    <div className="App">
      <button onClick={() => {
        setColorText(colorText === "blue" ? "red" : "blue");
      }}>Show/Hide</button>
      <h1 style={{color: colorText }}>Hi I am here</h1>
    </div>
  )
};
export default App;