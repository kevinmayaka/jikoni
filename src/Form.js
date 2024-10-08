import { useState } from "react"

export default function Form() {
    // handling state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        <div className="form">
            <div>User Registration</div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
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
                    onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}