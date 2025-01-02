import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./Reducers/CustomersSlice.ts";

function App() {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            {count} <br/>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default App