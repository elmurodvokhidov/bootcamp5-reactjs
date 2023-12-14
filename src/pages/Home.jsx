import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const data = useSelector(state => state);

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
                        data.map((itm, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{itm.name}</td>
                                <td>{itm.age}</td>
                                <td className='col-2'>
                                    <div className="btn-group">
                                        <button className='btn btn-success'>edit</button>
                                        <button className='btn btn-danger'>delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home