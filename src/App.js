import logo from "./logo.svg";
import "./App.css";
import NewTimer from "./components/NewTimer";
import ListTimers from "./components/ListTimers";
import throttle from "lodash/throttle";

function App() {
  return (
    <div className="App">
      <h1>TMRZ</h1>
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
