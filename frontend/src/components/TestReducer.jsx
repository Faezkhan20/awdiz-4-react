import { useReducer } from "react";

const InitialState = { count: 1000, useName: "Amaan" };

const reducer = (state, action) => {

    console.log(state, action, "state and action is here")

    switch (action.type) {
        case "Increment":
            return { ...state, count: state.count + 1 }
        case "Decrement" :
            return {...state , count : state.count - 1}
        case "Reset" :
            return {...state , count : 0}
        default : 
            return state;
    }
}
const TestReducer = () => {

    const [state, dispatch] = useReducer(reducer, InitialState);

    function Increment() {
        dispatch({type : "Increment" })
    }
    function Decrement() {
        dispatch({type: "Decrement"})
    }
    function Reset() {
        dispatch({type: "Reset"})
    }

    return (
        <div>
            <h1>Counter : {state.count}</h1>
            <h1>username : {state.useName}</h1>
            <button onClick={Increment} >Increment +</button><br/><br/>
            <button onClick={Decrement} >Decrement -</button><br/><br/>
            <button onClick={Reset} >Reset</button><br/>
        </div>
    )
}

export default TestReducer;