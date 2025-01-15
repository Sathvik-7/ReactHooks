import { createContext } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./useContext/ComponentC";

export const data = createContext();
export const dataAge = createContext();

const ComponentA = () => 
    {
        const name = "Sathvik";
        const age = 20;
        return (
            <data.Provider value={name}>
                <dataAge.Provider value = {age}>
                    {/* <ComponentB/>*/}
                    <ComponentC/>
                </dataAge.Provider>
            </data.Provider>
        );
    }

export default ComponentA;