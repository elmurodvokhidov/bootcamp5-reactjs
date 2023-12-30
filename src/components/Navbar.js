import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../slices/authslice';

function Navbar() {
    const { isLogin, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function logoutFunction() {
        const confirmation = window.confirm("Do you want to logout?");
        if (confirmation) {
            dispatch(userLogout());
        };
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" aria-label="Eleventh navbar example">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-3">
                        {
                            isLogin ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/create-article">Create Article</Link>
                                    </li>
                                    <li className="nav-item">
                                        <p className="text-light m-0">{user.username.length > 8 ? user.username.slice(0, 8) + "..." : user.username}</p>
                                    </li>
                                    <li className="nav-item">
                                        <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={user.image} alt={user.username} />
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logoutFunction} className='btn btn-danger'>Logout</button>
                                    </li>
                                </> :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="login">Login</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar