import {React,useState} from "react";

const Count = ()=>{

const[count, setCount] =  useState(0);
const increment = ()=>{
    setCount(count +1);
}
return(
    <div>
        <button onClick={increment} style ={{color:"blue", backgroundColor:"pink"}}>Increment</button>
        {count}
    </div>
)
};

export default Count;