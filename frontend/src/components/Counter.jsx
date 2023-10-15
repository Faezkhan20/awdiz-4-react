import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter(){
    const router=useNavigate();
    const [counter,setCounter]=useState(0);
    console.log(counter,"counter")

    // const [liked,setLiked]=useState(false);
    // console.log(liked,"liked")

    // function multitask(){
      
    //     setLiked((flag)=> !flag);
    //     setCounter((prevValue) => prevValue + 1)

    // }
    
    return(
        <div>
            <h1>counter - {counter} </h1>
            <button onClick={()=> router('/')}>go to homepage</button>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+ counter</button>
            <button onClick={() => setCounter((faez) => faez - 1)} >- Counter</button>
            <button onClick={() => setCounter((prevValue) => prevValue + 10)}>+10 counter</button>
            {/* <button onClick={multitask}>Like ?</button> */}
            
        </div>
    )

}



export default Counter