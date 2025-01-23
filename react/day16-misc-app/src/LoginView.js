import { useContext, useState } from "react";
import SecurityContext from "./SecurityContext";
import { useNavigate } from "react-router-dom";
 
const LoginView = () => {
    const navigate = useNavigate();
    const { setLoggedIn } = useContext(SecurityContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
 
    const loginButtonClicked = () => {
        // Simple input validation
        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }
 
        // Ignore username-password check; Let's keep it simple
        // JWT - Json Web Token
        // When you click a login button
        // your credentials are taken to a backend API (Authentication server); gets authenticated
        // and you get a JWT (this token is like an encrypted data which has information about you and the expiry time)
        // You store this JWT in LocalStorage or SessionStorage
        // You send this JWT token every time you send a request to a backend API
        setLoggedIn(true);
        localStorage.setItem("loggedIn", "1");
        navigate("/home", { replace: true });
    };
 
    return (
        <div>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            /><br/>
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            /><br/>
            <button onClick={loginButtonClicked}>Login</button>
        </div>
    );
};
 
export default LoginView;