import { useState } from "react"

import './Sign.css';

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "" || email === "" || password === ""){
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
                Enter Full Details.
            </div>
        );
    };

    return(
        <div className="form">
        <div>
            <h1>SignUp</h1>
        </div>
        <div className="message">
        {errorMessage()}
        {successMessage()}
        </div>

        <form>
            <label className="label">Name</label>
            <input 
            onChange={handleName}
            className="input"
            value={name}
            type="text"/>

            
            <label className="label">Emaild</label>
            <input 
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"/>

            <label className="label">password</label>
            <input 
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"/>

            <button onClick={handleSubmit} className="btn" type="submit">
            Submit
            </button>

        </form>
        </div>
    );
}

export default SignUp;