import {useNavigate} from 'react-router-dom'

function Homepage() {

  const router = useNavigate();

  function routerToLogin(){
       router("/login")
  }


    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            {/* <button>Go to Login</button> */}
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={()=> router('/Register')}>Go to Register</button>
            <button onClick={()=>router('/profile')}>Go to Profile</button>
            <button onClick={()=>router('/counter')}>Go to counter</button>
        </div>
    )
}

export default Homepage;