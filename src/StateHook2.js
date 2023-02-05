//react arrow function component with export/rafce
import React, { useState } from 'react';



const StateHook2 = () => {
    const [inputValue,setInputValue]=useState("kashaf");
     
    let onChange=(text)=>{
        const newValue=text.target.value;
        setInputValue(newValue);
    }
  return (
    <div>
      <h2>This is StateHook2</h2>
     <h4 className='para'> {inputValue}</h4>
     <div className="inp">
     <input placeholder='enter something...' onChange={onChange}/>
     </div>
     </div>
  )
}

export default StateHook2
