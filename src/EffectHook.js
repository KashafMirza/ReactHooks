import React, { useEffect, useState } from 'react';



const EffectHook = () => {
    //effecthook let you to perform side effects in function components..further..side effects are basically anything that affects something outside the scope of the current function that's being executed..data fetching , setting up the description are examples of side effects.
    //once you load your page first time useeffect automatically call or render on the page. 
    //useeffect render itself when all works done thats why it is called side effect

    const [count,setCount]=useState(0);
    useEffect(()=>{
         document.title=`Chats (${count})`;
    });

  return (
    <div>
            <h2>This is EffectHook</h2>
           <h1 className='cnt'>{count}</h1>
           <button className='btn1' onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default EffectHook
