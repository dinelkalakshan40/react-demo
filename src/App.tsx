import  {useReducer} from "react";
import "./App.css";


function App() {

    const reducer =(state:number,action:string)=>{
        switch (action){
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state -1;
            default:
                return state;
        }
    }

    const [count,dispath] =useReducer(reducer,0)

    return (
        <div>
            <h1>Count :{count}</h1>
            <button className="buttonStyle" onClick={()=>dispath("INCREMENT")}>Increment</button>
            <button className="buttonStyle" onClick={() =>dispath("DECREMENT")}>Decrement</button>
        </div>
    );
};

export default App;
