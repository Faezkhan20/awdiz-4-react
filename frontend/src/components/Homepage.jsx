import {useNavigate} from 'react-router-dom'

function Homepage() {

  const router = useNavigate();

  function routerToLogin(){
       router("/login")
  }


    return (
        <>
        <div>
            <h1>Homepage for Awdiz</h1>
            {/* <button>Go to Login</button> */}
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={()=> router('/Register')}>Go to Register</button>
            <button onClick={()=>router('/profile')}>Go to Profile</button>
            <button onClick={()=>router('/counter')}>Go to counter</button>
            <button onClick={()=>router('/effect1')}>go to effect1</button>
            <button onClick={()=>router('/effect2')}>go to effect2</button>
            <button onClick={()=>router('/effect3')}>go to effect3</button>
            <button onClick={()=>router('/effect4')}>go to effect4</button>
            <button onClick={()=>router('/params')}>go to params</button>
           


        </div>
        <div>
            This is fregment div
        </div>
        <div>
            this is 3 div
        </div>
        </>
    )
}

export default Homepage;