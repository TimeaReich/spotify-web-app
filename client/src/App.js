import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");
console.log(code);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Timi's poppify playlist</p>
      </header>
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;
