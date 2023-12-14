import { useState } from "react"
import { addNewItem } from "../redux/slice/MainSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextId from "react-id-generator";

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let id = nextId();

  function addNewFunc(e) {
    e.preventDefault();
    dispatch(addNewItem({ id, name, age }));
    navigate('/');
  };

  return (
    <div className="row justify-content-center align-items-center vh-100">
      <form onSubmit={addNewFunc} className="col-4 d-flex flex-column gap-3">
        <h1 className="text-center">Create a new user</h1>
        <div className="form-floating">
          <input onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control" id="floatingInput" placeholder="John" />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input onChange={(e) => setAge(e.target.value)} name="age" type="number" className="form-control" id="floatingPassword" placeholder="25" />
          <label htmlFor="floatingPassword">Age</label>
        </div>

        <button className="btn btn-dark w-100 py-3">Add User</button>
      </form>
    </div>
  )
}

export default Form