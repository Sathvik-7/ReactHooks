import { useState } from "react";

const FuncUseStateTwo = () => 
    {
        const [randomNumber , setRandomNumber] = useState(() => 
            Math.floor(Math.random()*100));

        return (
            <section>
                {randomNumber}
                <button onClick={() => 
                    {
                        setRandomNumber(Math.floor(Math.random()*100))
                    }}>Generate New</button>
            </section>
        );
    }

export default FuncUseStateTwo;