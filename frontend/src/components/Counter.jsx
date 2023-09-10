import { useState } from "react";
import { useNavigate } from "react-router-dom";

function counter(){
    const router=useNavigate();
    
    return(
        <div>
            <h1>counter page</h1>
            <button onClick={()=> router('/')}>go to homepage</button>
        </div>
    )

}



export default counter