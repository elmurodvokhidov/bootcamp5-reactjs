import { useContext, useState } from "react"
import { ContextData } from "../context/Context"


function Register() {
    const { valInput, setValInput } = useContext(ContextData);

    const [valErr, setValErr] = useState([]);

    function collectInput(e) {
        setValInput({
            ...valInput,
            [e.target.name]: e.target.value
        });
    };

    // Validation
    function validation(inputValue) {
        let errData = {};
        if (!inputValue.username) {
            errData = { ...errData, username: "Missed!" }
        } else if (inputValue.username.trim().length < 3) {
            errData = { ...errData, username: "Username must be less than 3 characters!" }
        }
        if (!inputValue.password) {
            errData = { ...errData, password: "Missed!" }
        } else if (inputValue.password.trim().length < 6) {
            errData = { ...errData, password: "Password must not be less than 6 characters!" }
        }
        return errData;
    }

    // register function
    function register() {
        setValErr(validation(valInput))
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <div className="inputGroup">
                    <label htmlFor="username">Username</label>
                    <input onInput={(e) => collectInput(e)} name="username" type="text" id="username" placeholder="Enter username" />
                    <span style={{color: 'red'}}>{valErr.username}</span>
                </div>

                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input onInput={(e) => collectInput(e)} name="password" type="password" id="password" placeholder="Password" />
                    <span style={{color: 'red'}}>{valErr.password}</span>
                </div>
                <button onClick={register} variant="primary" type="button">Register</button>
            </form>
        </div>
    )
}

export default Register