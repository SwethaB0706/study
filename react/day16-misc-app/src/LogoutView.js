import { useContext } from "react";
import SecurityContext from "./SecurityContext";
import { useNavigate } from "react-router-dom";

const LogoutView = () => {
    const navigate = useNavigate();
    const {setLoggedIn} = useContext(SecurityContext);

    const logoutButtonClicked = () => {
        setLoggedIn(false);
        localStorage.removeItem("loggedIn");
        navigate("/", {replace: true});
    };
    return (<div>
        <button onClick={logoutButtonClicked}>Logout</button>    
    </div>);
};

export default LogoutView;