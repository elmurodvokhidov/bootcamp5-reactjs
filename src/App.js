import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add": return [...state, action.payload]
    default: return state
  }
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, dispatch] = useReducer(reducer, []);

  function addFunction() {
    dispatch({ type: "add", payload: inputValue });
    setInputValue("");
  }

  return (
    <div className="App">
      <div>{list.map((itm, ind) => (
        <h2 key={ind}>{itm}</h2>
      ))}</div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="name" id="name" />
      <button onClick={addFunction}>add list</button>
    </div>
  );
}

export default App;