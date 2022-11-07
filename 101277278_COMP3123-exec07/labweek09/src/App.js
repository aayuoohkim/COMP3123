import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.subject}</h2>
        <h4>{props.number}</h4>
        <h4>{props.name}</h4>
        <h2>{props.college}</h2>
      </header>
    </div>
  );
}

export default App;
