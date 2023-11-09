import CardParent from "./components/CardParent";
import Navbar from "./components/Navbar";
import './Main.css';

function App() {
  return (
    <div className="App">
      {/* Navbar qismi */}
      <Navbar />
      <CardParent />
    </div>
  );
}

export default App;
