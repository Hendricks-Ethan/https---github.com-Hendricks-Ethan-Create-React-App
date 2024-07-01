import "./Login.css";

const Login = () => {
    return (
        <div className="login-card">
            <h3>Login Here</h3>
            <div>
                <input type="text" className="input" placeholder="Username"></input>
            </div>
            <div>
            <input type="password" className="input" placeholder="Password"></input>
            </div>
            <div>
                <button type="submit" className="submit">Sign In</button>
            </div>
        </div>
    );
}

export default Login;