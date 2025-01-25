import { useId } from "react";

const UseIdExample = () =>
    {
        const id = useId();
        return (
            <section>
                <label htmlFor={`${id}-email`}>Email</label>
                <input type="email" id={`${id}-email`}/>

                <br/><br/>

                <label htmlFor={`${id}-password`}>password</label>
                <input type="password" id={`${id}-password`}/>

            </section>
        );
    }

export default UseIdExample;