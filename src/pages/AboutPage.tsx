import {useNavigate} from "react-router";


export function AboutPage(){
    const Navigate =useNavigate();
    return(
        <div>
            <h1>About-Page</h1>
            <button onClick={()=>Navigate(-1)}>Back-Home</button>
        </div>
    )
}