import React, { useEffect, useState } from "react";
import './counter.css'

const Example =()=> {
    const [count, setCount] =useState(0);
    
    useEffect(() =>{
        console.log('Rendered ! ')
return() => {
    console.log('Unmounted! ')
};

    }, [])
    return(
        <div className="div">
            <p className="count">Count: {count}</p>
            <button className="button-inc" onClick={() => setCount(count +1)}>increment</button>
            <button className="button-dec" onClick={() => setCount(count -1)}>decrement</button>
        </div>
    )
}

export default Example;