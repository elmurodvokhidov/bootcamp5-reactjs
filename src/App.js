import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  let [url, setUrl] = useState('https://fakestoreapi.com/products/1');

  const getData = useCallback(async () => {
    const all = await fetch(url);
    const jsonData = await all.json();
    setData(jsonData);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  function change() {
    setUrl('https://fakestoreapi.com/products/2')
  };

  function change2() {
    setUrl('https://fakestoreapi.com/products/3')
  };

  console.log(data);

  return (
    <div className="App">
      <h1>{data?.title}</h1>
      <button onClick={change}>get 2</button>
      <button onClick={change2}>get 3</button>
    </div>
  );
}

export default App;
