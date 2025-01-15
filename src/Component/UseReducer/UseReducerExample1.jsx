import React , {useReducer} from 'react'

const UseReducerExample1 = () => {

    const initialState = {count : 0}

    const reducer = (s,a) =>
        {
            switch (a.type) {
                case "increment":
                    return {...s , count : s.count + 1}
                    
                case "decrement":
                    return {...s , count : s.count - 1}
                
                case "reset":
                    return {...s , count : 0}
            
                default:
                    return s;
            }
        }

    const [state,dispatch] = useReducer(reducer,initialState)
  
    return (
    <div>
        {state.count} <br/>
        <button onClick={() => dispatch({type:"increment"})}>+</button>
        <button onClick={() => dispatch({type:"decrement"})}>-</button>
        <button onClick={() => dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default UseReducerExample1