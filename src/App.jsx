import { useState , createContext} from "react";
import ComponentA from "./Component/Context API/ComponentA.jsx";
import UserContext from "./Component/Context API/Exercise/UserContext.jsx";
import UserProfile from "./Component/Context API/Exercise/UserProfile.jsx";
import UseReducerExample1 from "./Component/UseReducer/UseReducerExample1.jsx";
import ShoppingCartUseState from "./Component/UseStateVSUseReducer/ShoppingCartUseState.jsx";
import UseReducerExample2 from "./Component/UseReducer/UseReducerExample2.jsx";
import Counter from "./Component/UseReducer/Exercise/Counter.jsx";
import UseRefExample1 from "./Component/UseRef/UseRefExample1.jsx";
import StopWatch from "./Component/UseRef/StopWatch.jsx";
import useFetch from "./Component/CustomHooks/useFetch.jsx";
import UseIdExample from "./Component/UseID/UseIdExample.jsx";

const App = () => 
  {
    //const [count , setCount] = useState(0);
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return(
    <section>
      {/* useState() */}
      {/*
      <Basic/>
      {count}
      <ComponentOne onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo onClickHandler={() => setCount(count- 1)}/>
      
      <FunUseStateOne/>
      
      <FuncUseStateTwo/>
      
      <TodoList/>
      */}

      {/* Portal Examples */} 
      {/*<PortalCopyInput/> */}

      {/* useEffect() examples */}
      {/* <UseEffectExampleOne /> */}
      {/* <UseEffectFetchData/> */}
    
      {/* Props Drilling */}
      {/* <ComponentA name={name} />*/}

      {/* Context API*/}
      {/* <ComponentA/> */}
      {/* 
        <UserContext>
        <UserProfile/>
        </UserContext>
      */}
    
      {/* useReducer */}
      {/*  
        <UseReducerExample1/>
    
        <ShoppingCartUseState/>

        <UseReducerExample2/>

        <Counter/>
      */}

      {/* useRef() */ } 
      {/* <UseRefExample1/> */ }
      {/* <StopWatch/> */ }
    
      {/* useImperativeHandle() */}
      
      {/*Custom hooks */}
      {/* 
          {data && data.map(items => 
          {
            return <p key={items.id}>{items.title}</p>
          })} 
      */}

      {/* UseId */}
      <UseIdExample/>

      <UseIdExample/>
      
    </section>
    );
  }

export default App;