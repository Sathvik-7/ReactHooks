import { useState } from "react";
import PortalPopUp from "./PortalPopUp";

const PortalCopyInput = () => 
    {
        const [inputValue,setInputValue] = useState('');

        const [copy , setCopy] = useState(false);

        const HandleCopy = () => 
            {
                (inputValue!="" && inputValue.length > 0 ) 
                ? navigator.clipboard.writeText(inputValue).then(() => 
                    {
                        setCopy(true);
                        setTimeout(() => { setCopy(false) },5000);
                    }) 
                : alert("please enter some input")
            }

        return ( 
        <section>
            <input type="text" value={inputValue} 
                                onChange={e => setInputValue(e.target.value)}/>
            <button onClick={HandleCopy}>Copy</button>

            <PortalPopUp copied = {copy} />
        </section>
    );
    }

    export default PortalCopyInput;