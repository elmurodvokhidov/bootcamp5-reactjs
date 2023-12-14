import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" aria-label="Eleventh navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="add">Add new</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="profile">Profile</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar