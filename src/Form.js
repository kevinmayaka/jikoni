import { useState } from "react"
import './Form.css'

export default function Form() {
    // handling state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // states to handle form visibility
    const [isFormVisible, setisFormVisible] = useState(false);
    

    // states for checking errors
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    // handling name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    // handling email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    // handling password change 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    // handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true)
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    // showing success message 
    const successMessage = () => {
        return (
            <div className="success"
                style={{ display: submitted ? "" : "none" }}>
                <h1>User{name}sucessfully registered</h1>
            </div>
        );
    };
    // showing error message
    const errorMessage = (e) => {
        return (
            <div className="error"
                style={{ display: error ? "" : "none" }}>
                <h1>Please fill in all the fields</h1>
            </div>
        )
    }
    return (
        <div className="app">
            <button className="nav-btn" onClick={()=> setisFormVisible(!isFormVisible)}>
                log in</button>
            {/* conditionally rendering the form */}
            {isFormVisible && (
            <div className="form">
            <div>User Registration</div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form onSubmit={handleSubmit}>
                <label className="label">Name</label>
                <input className="input"
                    onChange={handleName}
                type="text"
                value={name}                              
                />

                <label className="label">Email</label>
                <input className="input"
                    onChange={handleEmail}
                    type="text"
                    value={email}
                />
                
                <label className="label">Password</label>
                <input className="input"
                    onChange={handlePassword}
                    type="text"
                    value={password}
                />

                <button
                    className="btn"
                    type="submit"
                    >Submit</button>
            </form>
                </div>
                )}
            </div>
    );
}