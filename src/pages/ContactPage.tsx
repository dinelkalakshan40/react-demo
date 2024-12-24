import {useNavigate} from "react-router";

export function ContactPage(){
    const Navigate =useNavigate();
    return(
        <div>
            <h1>Contact-Page</h1>
            <button onClick={() => Navigate(-1)}>Back-Home</button>
        </div>
    )
}