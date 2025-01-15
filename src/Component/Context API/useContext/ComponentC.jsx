import { useContext } from "react";
import { data,dataAge } from "../ComponentA";
const ComponentC = () => 
    {
        const name = useContext(data);
        const age = useContext(dataAge);

        return (
        <section>
            Hi {name}<br/>
            Your age is : {age}        
        </section>
    );        
    }

export default ComponentC;