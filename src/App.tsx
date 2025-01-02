import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {changeName} from "./Reducers/CustomerSlice.ts";


function App() {

    const name = useSelector(state => state.changeName.value);
    const dispatch = useDispatch();

    return (
        <>
            <input className="input-field" type="text" onChange={(e) => dispatch(changeName(e.target.value))}/>
            <br/>
            <h2>{name}</h2>

        </>
    )
}

export default App