import { useState } from "react"
import { editItem } from "../redux/slice/MainSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import getUID from "uid-generator-package";
import { useEffect } from "react";

function Edit() {
    const data = useSelector(state => state.users);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const params = useParams();
    const targetUser = data.find(user => user.id === params.id);

    useEffect(() => {
        setName(targetUser.name);
        setAge(targetUser.age);
    }, []);

    function editFunction(e) {
        e.preventDefault();
        dispatch(editItem({ id: params.id, name, age }));
        navigate('/');
    };

    return (
        <div className="row justify-content-center align-items-center vh-100">
            <form onSubmit={editFunction} className="col-4 d-flex flex-column gap-3">
                <h1 className="text-center">Update user</h1>
                <div className="form-floating">
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control" id="floatingInput" placeholder="John" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input value={age} onChange={(e) => setAge(e.target.value)} name="age" type="number" className="form-control" id="floatingPassword" placeholder="25" />
                    <label htmlFor="floatingPassword">Age</label>
                </div>

                <button className="btn btn-dark w-100 py-3">Update</button>
            </form>
        </div>
    )
}

export default Edit