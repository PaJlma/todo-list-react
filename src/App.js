import "./App.css";
import "./reset.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Notepad from "./components/Notepad/Notepad";

const App = (props) => {
  return (
    <div className="App">
      <Sidebar state={props.state} dispatch={props.dispatch} />
      <Notepad state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
