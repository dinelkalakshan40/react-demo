import './App.css'
import {useEffect, useState} from "react";



function App() {

    const [count,setCount] =useState(0);

    const increment  =() =>{
        setCount(count+1)
    };
    const decrement =() =>{
        setCount(count-1)
    };
    useEffect( () =>{
        console.log(`New count is :${count}`)
        },[count]
    )

    return (
        <>
            <h1>Count :{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>

        </>
    )
}

export default App
