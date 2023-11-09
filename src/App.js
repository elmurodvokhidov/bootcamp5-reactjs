import { useContext } from "react";
import { ContextData } from "./context/ContextComp";
import ComponentA from "./ComponentA";

function App() {
  const { user } = useContext(ContextData);

  return (
    <div className="App">
      <h1>{user}</h1>
      <ComponentA />
    </div>
  );
}

export default App;
