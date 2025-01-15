import React, { useEffect } from 'react'
import {useState} from 'react';

const UseEffectExampleOne = () => {

    const [count , setCount] = useState(0);
  
    const [input , setInput] = useState('');

    useEffect(()=>
        {
            if(count>0) 
            {
            console.log("useEffect()");
            document.title = `${count}`;
            }
        },[count]
    );
    return (
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>Click Me</button>
            <br></br>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
  )
}

export default UseEffectExampleOne