import {createStore} from 'redux'
import './App.css';

function App() {

  const reducer =(state={},action)=>{

    if (action.type === 'a'){
      return{
       a: 'i am a'
      }
    }
    return state
  }

  const store =createStore (reducer)
    store.subscribe(()=>{

      console.log(store.getState())
    })
      store.dispatch({type:'a'})

  return (
    <div className="App">
     <h1>Redux</h1>
    </div>
  );
}

export default App;
