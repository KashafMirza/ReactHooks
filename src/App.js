import './App.css';
import EffectHook from './EffectHook';
import ReducerHook from './ReducerHook';
import StateHook1 from './StateHook1';
import StateHook2 from './StateHook2';


function App() {
  return (
    <div className="App">
    

     <StateHook1/>
     <StateHook2/>
     <ReducerHook/>
     <EffectHook/>
 

    </div>
  );
}

export default App;
