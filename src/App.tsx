import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <>
            {count}
            <br/>
            <button className="buttonStyle" onClick={() => dispatch({ type:'INCREMENT'})}>Increment</button>
            <button className="buttonStyle" onClick={() => dispatch({ type:'DECREMENT'})}>Decrement</button>
            <button className="buttonStyle" onClick={() => dispatch({ type:''})}>Select</button>
        </>
    )
}

export default App