import { useRef , useEffect, useState } from "react";
const UseRefExample1 = () => 
    {
        const inputElement = useRef(null);
        
        const [count,setCount] = useState(0);

        const focusElement = () => 
            {
                inputElement.current.focus();
                inputElement.current.value = "Sathvik Ch";
                setCount(count+1)
            }

        useEffect(()=>
            {
                console.log("page re-renders");
            })
        return (
                <div>
                    <input type="text" ref={inputElement}/>
                    <button onClick={() => focusElement()}>Click to Focus</button>
                </div>
                );
    }

export default UseRefExample1;