import { useReducer , useState } from "react";
import { initialCount,counterReducer } from "./CounterReducer";
const Counter = () => 
    {

        const [state,dispatch] = useReducer(counterReducer,initialCount);
        
        const [value,setValue] = useState(0);
        return (
            <div>
                {state.count} 
                
                <br/><br/>
                <input type="text" value={value} placeholder="enter a value" 
                onChange={(e)=> setValue(e.target.value)} />
                
                <br/><br/>
                <button onClick={()=> dispatch({type:"incr"})}>+</button>
                
                <br/><br/>
                <button onClick={()=> dispatch({type:"decr"})}>-</button>

                <br/><br/>
                <button onClick={()=> dispatch({type:"incrByValue",payload:+value})}>+</button>
                
                <br/><br/>
                <button onClick={()=> dispatch({type:"decrByValue",payload:+value})}>-</button>

            </div>
        );
    }

export default Counter;