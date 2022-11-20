import { useToggle } from "./Cat";
import "./App.css";

function App(){
  const {state, toggle} = useToggle();

  return(
    <div className="App">
      <button onClick={toggle}>
        {state ? "Hide" : "Show"}
      </button>
      {state && <h2>Hidden text</h2>}  
    </div>
  );
}

export default App;