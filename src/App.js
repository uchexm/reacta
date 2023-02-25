import { useToggle } from "./useToggle";
import "./App.css";

function App(){
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  return(
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h2>Hidden text</h2>}  

      <button onClick={toggle2}>
        {isVisible2 ? "Hide" : "Show"}
      </button>
      {isVisible2 && <h2>Hidden text</h2>}  
    </div>
  );
}

export default App;