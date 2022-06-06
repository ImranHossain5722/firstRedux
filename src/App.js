import { Provider } from "react-redux";
import { createStore } from "redux";
import store from './Store/index'
import "./App.css";
import Count from "./Components/Count";

function App() {
  // redux
  // const reducer =(state={},action)=>{

  //   if (action.type === 'a'){
  //     return{
  //      a: 'i am a'
  //     }
  //   }
  //   return state
  // }

  // const store =createStore (reducer)
  //   store.subscribe(()=>{

  //     console.log(store.getState())
  //   })
  //     store.dispatch({type:'a'})

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <Count></Count>
      </div>
    </Provider>
  );
}

export default App;
