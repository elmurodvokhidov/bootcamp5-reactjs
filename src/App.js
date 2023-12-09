import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice/CounterSlice";

function App() {
  const state = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>inc</button>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch(decrement())}>dec</button>
    </div>
  );
}

export default App;
