import './App.css'
import {useState} from "react";


function App() {
    // Declare state variable "count" and set its initial value to 0
    const [count, setCount] = useState(0);

    // Function to increase the count
    const increaseCount = () => {
        setCount(count + 1); // Update state
    };

    return (
        <>
            <h1>My Counter App</h1>
            <button onClick={increaseCount}>Increment</button>
            <h2>Count: {count}</h2>

        </>
    )
}

export default App
