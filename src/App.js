import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Loader from "./assets/Loader";

function App() {
  const [CITY, setCITY] = useState('');
  const KEY = '1742cda330b290539516219a807e13aa';

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

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
      <input onKeyDown={(e) => e.key === "Enter" ? getInputVal() : null} type="text" name="city" id="city" ref={inputRef} />
      <button onClick={getInputVal}>send</button>
      {loading ? <Loader /> : <h1>{data.name}</h1>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;