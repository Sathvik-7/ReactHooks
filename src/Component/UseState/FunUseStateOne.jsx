import React from 'react'
import {useState} from 'react'

const FunUseStateOne = () => {
    const [count , setCount] = useState(() => 
        {
            const x = 10;
            return x;
        });

    const Increment = () => 
        {
            setCount(c => c+1);
        }   

  return (
    <div>
        {count}
        <button onClick={Increment}>Add</button>
    </div>
  )
}

export default FunUseStateOne;