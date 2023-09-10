import {useNavigate } from "react-router-dom";

const Register = () => {
    const Router = useNavigate();
    return (
        <div>
            <h1>Register</h1>
        <button onClick={()=> Router('/')}>Go to Homepage</button>
        </div>
    )
}

export default Register;
