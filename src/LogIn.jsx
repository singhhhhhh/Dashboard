import { useState } from "react"

import './Sign.css';

const LogIn = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(name === "" || password === ""){
            setError(true);
        } else{
            setSubmitted(true);
            setError(false);
        }
    }

    const successMessage = () => {
        return(
            <div className="success"
            style={{
                display:submitted ? "" : "none",
            }}>
                <h1>Hello, {name}</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return(
            <div className="error" 
            style={{
                display: error ? "" : "none",
            }}>
                Enter Correct details.
            </div>
        );
    };

    return(
        <div className="form">
        <div>
            <h1>SignIn</h1>
        </div>
        <div className="message">
        {errorMessage()}
        {successMessage()}
        </div>

        <form>
            <label className="label">Username</label>
            <input 
            onChange={handleName}
            className="input"
            value={name}
            type="text"/>

            <label className="label">Password</label>
            <input 
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"/>

            <a href="#">Forgot Password</a>

            <button onClick={handleLogin} className="btn" type="submit">
            Login
            </button>


        </form>
        </div>
    );
}

export default LogIn;