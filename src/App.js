import './Main.css';
import Form from "./Components/Form";
import Table from "./Components/Table";
import { Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Info from './Components/Info';

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='add' element={<Form />} />
        <Route path='profile' element={<Profile />} />
        <Route path='info' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
