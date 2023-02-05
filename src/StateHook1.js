import React,{useState} from 'react';


const StateHook1 = () => {
    //hook is a function that connects you with the react features..
    //useState hook shows the values that we have passed to the function in react web page
     const [counter,setCounter]=useState(0);

     const increment =()=>{
         setCounter(counter+1);
     }

    return (
        <div>
             <h2>This is StateHook1</h2>
             <p className='val'> {counter}</p>
            <button className='btn0' onClick={increment} >Click on here to increment the value</button>
        </div>
    )


}

export default StateHook1
