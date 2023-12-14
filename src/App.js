import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Loader from "./assets/Loader";
import './index.css'
import SearchInput from "./assets/SearchInput";

function App() {
  const [CITY, setCITY] = useState('');
  const KEY = 'db53a00eee2da0ebe4ab04359ba97ddf';

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    async function getWeather() {
      try {
        setLoading(true)
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${KEY}`);
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (CITY !== '') getWeather();
  }, [CITY, KEY]);

  function getInputVal() {
    setCITY(inputRef.current.value);
  };

  return (
    <div className="App">
      <SearchInput getInputVal={getInputVal} inputRef={inputRef} />
      {loading ? <Loader /> : <h1>{data.name}</h1>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;