import {createContext, useState} from "react";
import Component1 from "./Component/useContext/Component1.tsx";


export const myName = createContext({})

function App() {


    const [userName,setUserName] =useState("")

    return (
        <myName.Provider value={{ userName, setUserName }}>
            <div>
                <h1>Welcome to the App</h1>
                <p>Current User Name: {userName}</p>
                {/* Render the first component */}
                <Component1 />
            </div>
        </myName.Provider>
    );
}

export default App;
