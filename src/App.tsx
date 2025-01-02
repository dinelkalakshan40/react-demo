import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {

    const customer = useSelector(state => state.customer)
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/> <br/>
            <button onClick={() => dispatch({ type:'ADD_CUSTOMER',payload:name})}>Add Name</button>
            <button onClick={() => dispatch({ type:'ADD_CUSTOMER',payload:email})}>Add Email</button>
            <br/>
            {customer}
        </>
    )
}

export default App