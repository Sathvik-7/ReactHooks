import { useReducer, useState } from "react";

const UseReducerExample2 = () =>
    {
        const personRecord = [
            {   id : Date.now() , 
                name:"sathvik" ,
                email : "sathvik@gmail.com"
            }
        ];

        const reducer = (state,action) => 
            {
                switch(action.type)
                {
                    case "add":
                        return [...state,action.payload]
                    case "delete":
                        return state.filter( (f) => f.id!=action.payload)
                    default:
                        throw new Error();
                }
            }

        const [state,dispatch] = useReducer(reducer,personRecord);
        
        const [name , setName] = useState("");
        const [email , setEmail] = useState("");

        const addContact = (e) => 
            {
                e.preventDefault();

                const o = 
                {
                    id : Date.now(),
                    name,
                    email
                }

                setName("")
                setEmail("")

                dispatch({type:"add",payload:o})
            };

        return(
        <div>
            <form onSubmit={addContact}>
                Name : <input type="text" value={name} placeholder="enter name"
                        onChange={(e) => setName(e.target.value)}/> 
                <br/>
                Email : <input type="email" value={email} placeholder="enter name"
                        onChange={(e) => setEmail(e.target.value)}/> 
                <br/> <br/>
                <button>Add Contact</button>
            </form>

            <ul>
                {
                    state.map((c) =>
                        <li key={c.id}>
                            {c.name} {c.email}
                            <button onClick={() => dispatch({type:"delete",payload:c.id})}>Delete</button>
                        </li>)
                }
            </ul>
        </div>);
    }

export default UseReducerExample2;