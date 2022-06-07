import { createStore } from "redux";
import rootReducers from "./reducers/rootReducers";

// const store =createStore (rootReducers)


const INCREMENT = 'Increment';
const DECREMENT = 'Decrement';

// state
const initialState = {
    count:0
}

// action
const incrementAction =() =>{

    return{

        type: INCREMENT,
    }
}
const decrementAction =() =>{

    return{

        type: DECREMENT,
    }
}


//reducer
const counterReducer = (state= initialState,action)=>{

switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count:state.count +1
        }
    case DECREMENT:
        return{
            ...state,
            count:state.count -1
        }

    default:
        break;
}
}


//Store 
const store = createStore(counterReducer)

store.subscribe(()=>{

    console.log(store.getState())
})

store.dispatch (incrementAction())


export default store


