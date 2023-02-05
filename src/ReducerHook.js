import React, { useReducer } from 'react';


const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="Increment"){
        return state+1;
    }
    if(action.type==="Decrement"){
        return state-1;
    }
    return state;
}

const ReducerHook = () => {
  //  useReducer hook is used to create multiple states at a time..it fires a funnction against an initial value
  const [state, dispatch]=useReducer(reducer,0);
  

  return (
    <div>
       <h2>This is ReducerHook</h2>
      <p className='para'>{state}</p>
      <div className="btn">
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
      </div>
    </div>
  )
}

export default ReducerHook
