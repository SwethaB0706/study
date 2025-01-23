import { useState } from "react";
import { usePrevious } from "@uidotdev/usehooks";


const Sample = ()  => {
    const [number, setNumber] = useState(2);
    const previousNumber = usePrevious(number);
    const increment = () =>{
        //number = number + 1;
        setNumber(number + 1);
    }

    const decrement = () =>{
        //number = number - 1;
        setNumber(number - 1);
    }


    return(
        <div>
            {number}<br/>
            {previousNumber}<br/>
            <button onClick = {increment} >Increment</button><br/>
            
          
            <button onClick = {decrement}>Decrement</button><br/>
        
        
        </div>
    )

};

export default Sample;