import axios from "axios";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [users, setUsers] = useState(null);

  const URL = 'http://localhost:5000/todos';

  const getUsers = useCallback(async () => {
    try {
      const response = await axios(URL);
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }, [URL]);

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  return (
    <div className="App">
      <div className='container'>
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
                      <button className={item.completed ? 'btn btn-success' : 'btn btn-danger'}>{item.completed ? <MdDone /> : <RxCross2 />}</button>
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
