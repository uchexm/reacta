import './App.css';

function App() {
  return (
    <div className="App">
      <User name ="Uche" age={33} email="uche@uche.com" />
      <User name ="Fred" age={44} email="fred@uche.com" />
      <User name ="qwaza" age={33} email="uche@uche.com" />
    </div>
  );
}
// user component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <p>{props.email}</p>
    </div>
  )
};

export default App;
