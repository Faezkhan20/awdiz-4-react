import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Effect2 = () => {
    const router = useNavigate();

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        alert("Rendered 2nd type, it'll execute the code only on first render of component.")
    }, [])

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
            <button onClick={()=> router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Effect2