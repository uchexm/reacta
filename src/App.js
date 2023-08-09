import './App.css';

function App() {
  return (
    <div className="App">
      <User name ="Uche" age={33} email="uche@uche.com" />
      <User name ="Fred" age={44} email="fred@uche.com" />
      <User name ="qwaza" age={33} email="uche@uche.com" />

      <Job salary={200000} position="Java Dev" company="Netflix"/>
      <Job salary={100000} position="Js Dev" company="flex"/>
      <Job salary={300000} position="Ruby Dev" company="Netflix"/>
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

//job component
const Job = (props) => {
  return(
    <div>
      <p>{props.salary}</p>
      <p>{props.position}</p>
      <p>{props.company}</p>
    </div>
  );
};

export default App;
