import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {handleRegister, loading} = useAuth()
    const navigate = useNavigate()

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    
        async function handleSubmit(e) {
            e.preventDefault();
    
            handleRegister(username, email, password)
            .then(res=>{
                // console.log(res);
                navigate("/login")
            })
        }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onInput={(e) => {
                            setUsername(e.target.value);
                        }}
                        value={username}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onInput={(e) => {
                            setEmail(e.target.value);
                        }}
                        // value={email}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onInput={(e) => {
                            setPassword(e.target.value);
                        }}
                        // value={password}
                    />

                    <button className="button primary-button" type="submit">Login</button>
                </form>

                <p>
                    Already have an accout?{" "}
                    <Link className="toggleAuthForm" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Register;
