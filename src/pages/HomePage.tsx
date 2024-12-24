import {Link} from "react-router";

export function HomePage(){
    return(
        <div>
            <h1>Home-Page</h1>
            <Link to={'/about'}>go to about page</Link><br/>
            <Link to={'/contact'}>go to contact  page</Link><br/>

        </div>
    )
}