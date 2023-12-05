import { useReducer } from "react";

function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "inc": return state + 1
      case "dec": if(state > 0) return state - 1
      default: return state;
    }
  };

  return (
    <div className="App">
      <center>
        <button onClick={() => dispatch({ type: "inc" })}>inc</button>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: "dec" })}>dec</button>
      </center>
    </div>
  );
}

export default App;
