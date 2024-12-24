import {Link, useNavigate} from "react-router";

export function HomePage(){
    const Navigate = useNavigate()
    return(
        <div>
            <h1>Home-Page</h1>
            <Link to={'/about'}>go to about page</Link><br/>
            <Link to={'/contact'}>go to contact  page</Link><br/>
            <button onClick={()=>Navigate('/about')}>Go-to-About-page</button>
            <button onClick={()=>Navigate('/contact')}>Go-to-Contact-page</button>

        </div>
    )
}