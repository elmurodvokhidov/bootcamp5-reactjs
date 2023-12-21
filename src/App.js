import axios from "axios";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import getUID from "uid-generator-package";

function App() {
  const [users, setUsers] = useState(null);
  const [input, setInput] = useState({
    id: '',
    title: '',
    completed: false
  });

  function getInputVal(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  };

  function getUsers() {
    axios.get('http://localhost:5000/todos')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    getUsers()
  }, []);

  function addFunction() {
    axios.post('http://localhost:5000/todos', { ...input, id: getUID() });
    getUsers();
  }

  function handleToogle(item) {
    axios.put(`http://localhost:5000/todos/${item.id}`, { ...item, completed: !item.completed });
    getUsers();
  };

  return (
    <div className="App">
      <div className='container'>
        <input
          value={input.title}
          onChange={(e) => getInputVal(e)}
          className="my-5"
          type="text"
          name="title"
          id="title"
          placeholder="Enter your todo work..."
        />
        <button onClick={addFunction} className="btn btn-success">add</button>

        <table className="table table-dark table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.length > 0 ? users?.map((item, ind) => (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{item.title}</td>
                  <td className='col-2'>
                    <div className="btn-group">
                      <button onClick={() => handleToogle(item)} className={item.completed ? 'btn btn-success' : 'btn btn-danger'}>{item.completed ? <MdDone /> : <RxCross2 />}</button>
                    </div>
                  </td>
                </tr>
              )) : <tr><td colSpan={10} className='text-center fs-1 text-danger p-5'>Users not found!</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
