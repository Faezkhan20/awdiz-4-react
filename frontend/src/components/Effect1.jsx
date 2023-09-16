import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Effect1 = () => {
    const router = useNavigate();

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        alert("Rendered.. it'll execute the function on every render and render causes bcoz of first render, reload and state change")
    })

    return (
        <div>
            <h1>Counter - with all state dependencies {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
            <button onClick={()=> router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Effect1