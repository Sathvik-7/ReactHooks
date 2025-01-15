import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => 
    {
        const [name,setName] = useState({name:"Sathvik"})

        const updateUser = (updatedName) => 
            {
                setName({name : updatedName})
            }

        return (
            <UserContext.Provider value={{name,updateUser}}>
                {children}
            </UserContext.Provider>
            );
    }

export default UserProvider;