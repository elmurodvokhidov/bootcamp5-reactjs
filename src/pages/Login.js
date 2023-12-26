import React from 'react'

function Login() {
    return (
        <div className="row justify-content-center align-items-center vh-100">
            <form className="col-4 d-flex flex-column gap-3">
                <h1 className="text-center">Login</h1>
                <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="floatingPassword" placeholder="..." />
                    <label htmlFor="floatingPassword">Email</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="..." />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-dark w-100 py-3">Add User</button>
            </form>
        </div>
    )
}

export default Login