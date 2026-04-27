import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {handleLogin, loading} = useAuth()
    const navigate = useNavigate()

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await handleLogin(username, password)
        .then(res=>{
            console.log(res);
            navigate("/feed")
        })
    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onInput={(e) => {
                            setUsername(e.target.value);
                        }}
                        // value={username}
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
                    Don't have an account?{" "}
                    <Link className="toggleAuthForm" to="/register">
                        Create One.
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
