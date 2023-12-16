import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../redux/slice/MainSlice';
import { Link } from 'react-router-dom';

function Home() {
    const data = useSelector(state => state.users);
    const dispatch = useDispatch();

    function deleteUser(userId) {
        dispatch(delItem(userId))
    };

    return (
        <div className='container'>
            <table className="table table-dark table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? data.map((itm, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{itm.name}</td>
                                <td>{itm.age}</td>
                                <td className='col-2'>
                                    <div className="btn-group">
                                        <Link to={`${itm.id}`} className='btn btn-success'>edit</Link>
                                        <button onClick={() => deleteUser(itm.id)} className='btn btn-danger'>delete</button>
                                    </div>
                                </td>
                            </tr>
                        )) : <tr><td colSpan={10} className='text-center fs-1 text-danger p-5'>Users not found!</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home