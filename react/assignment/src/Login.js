import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const[username, setUser] = useState(null);
    const[password, setPass] = useState(null);
    const navigate = useNavigate();

   

    useEffect(() => {
        document.body.style.background = "red"; // Change background to red when username changes
        
        return () => {
            document.body.style.background = ""; // Clean up by resetting background on unmount or dependency change
        };
    }, [username]);

    useEffect(() => {
        document.body.style.background = "blue"; // Change background to red when username changes
        
        return () => {
            document.body.style.background = ""; // Clean up by resetting background on unmount or dependency change
        };
    },[password])


    const calling = (e) => {
        setUser(e.target.value);
    }

    const calls = (e) => {
        setPass(e.target.value);
    }

    const move =()=>{
        navigate("/dash");
    }

    return(
        <div>
            <input type="text" style = {{color : "pink"} } placeholder="username" onChange ={calling}/><br/>
            <input type="password" placeholder="password" onChange ={calls}/><br/>
            <button onClick={move}>Login.................</button>
            {username}
    
        </div>
    )
};

export default Login;