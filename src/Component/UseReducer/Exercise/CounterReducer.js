const initialCount = {count : 0}

const counterReducer = (state,action) => 
    {
        switch(action.type)
        {
            case "incr":
                return {count : state.count + 1};
            case "decr":
                return {count : state.count - 1};
            case "incrByValue":
                return {count : state.count + action.payload};
            case "decrByValue":
                return {count : state.count - action.payload};
            default:
                return state.count;   
        }
    }

export {initialCount,counterReducer};