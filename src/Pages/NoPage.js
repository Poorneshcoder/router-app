import React from "react";
import { useHistory } from "react-router-dom";

const NoPage = () => {
    const history = useHistory();
    return(
        <div>
            <h1>Hey! you lost your way clicked a wrong url</h1>
            <h1>404 Erorr</h1>
            <p>To Navigate to the right page click on the button below</p>
             <button
             onClick={()=>history.push('/')}
             >Go to Home</button>
        </div>
    )
}

export default NoPage;