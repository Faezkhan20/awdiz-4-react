import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useState } from 'react'
import "./PageNotFound.css"

const PageNotFound = () => {

    const router = useNavigate();
    const [seconds,Setseconds]=useState(5)

    useEffect(() => {
        if(seconds>0){
            setTimeout(()=>Setseconds(seconds - 1),1000);
           
                
            
        }else{
            router('/')
        }
        
    },[seconds])
    return (<>
    <div id='pagescreen'>
        <div id='page'>
            <h1>Page Not Found, redirecting you to home page in {seconds} sec..</h1>
            <button id='pagebutton' onClick={() => router('/')}>Go to home</button>
            {/* <h2>{seconds}</h2> */}
     {/* <h4>{msg}</h4> */}
        </div>
        </div>
        </>
    )
}

export default PageNotFound