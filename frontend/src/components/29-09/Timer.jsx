import React from 'react'
import "./Timer.css"
import { useState } from 'react'

const Timer = () => {
    var msg= ""
    const [seconds,Setseconds]=useState(5)

    
  
     
        if(seconds>0){
            setTimeout(()=>Setseconds(seconds - 1),1000);
           
                
            
        }else{
            msg="TimeOver"
        }



  
  return (
    
    <div>
     <h1>timer</h1>
     <h2>{seconds}</h2>
     <h4>{msg}</h4>
    </div>
  )
}

export default Timer