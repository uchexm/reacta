import "./App.css";
import { useState } from "react";

/*function App(){
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
*/
function App(){
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>
      <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
      <button onClick={()=>{setCount(count = 0)}}>Reset</button>
      {count}
    </div>
  );
};

export default App;