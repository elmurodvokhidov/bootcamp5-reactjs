import { useState } from "react";
import Jadval from "./components/Table";

function App() {
  const [allInfo, setAllInfo] = useState([
    {
      username: 'elmurod',
      email: 'elmurod@gmail.com',
      password: '12345',
    },
    {
      username: 'diyorbek',
      email: 'diyorbek@gmail.com',
      password: '12345',
    },
    {
      username: 'jahongir',
      email: 'jahongir@gmail.com',
      password: '12345',
    },
    {
      username: 'aliakbar',
      email: 'aliakbar@gmail.com',
      password: '12345',
    },
    {
      username: 'azizbek',
      email: 'azizbek@gmail.com',
      password: '12345',
    },
    {
      username: 'timur',
      email: 'timur@gmail.com',
      password: '12345',
    },
    {
      username: 'kamron',
      email: 'kamron@gmail.com',
      password: '12345',
    },
    {
      username: 'bobur',
      email: 'bobur@gmail.com',
      password: '12345',
    },
  ]);

  return (
    <div className="App">
      <Jadval allInfo={allInfo} />
    </div>
  );
}

export default App;
