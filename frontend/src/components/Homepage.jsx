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
            <button id='logincss' onClick={routerToLogin}>Go to Login</button>
            <button id='logincss' onClick={()=> router('/Register')}>Go to Register</button>
            <button id='logincss' onClick={()=>router('/profile')}>Go to Profile</button>
            <button id='logincss' onClick={()=>router('/counter')}>Go to counter</button>
            <button id='logincss' onClick={()=>router('/effect1')}>go to effect1</button>
            <button id='logincss' onClick={()=>router('/effect2')}>go to effect2</button>
            <button id='logincss' onClick={()=>router('/effect3')}>go to effect3</button>
            <button id='logincss' onClick={()=>router('/effect4')}>go to effect4</button>
            <button id='logincss' onClick={()=>router('/params')}>go to params</button>
            <button id='logincss' onClick={()=>router('/mapping')}>go to mapping</button>
            <button id='logincss' onClick={()=>router('/styled-components')}>go to StyledComponents</button>
            <button id='logincss' onClick={()=>router('/dynamic-styles')}>go to dynamic styled</button>
            <button id='logincss' onClick={()=>router('/ternary')}>go ternary</button>
            <button id='logincss' onClick={()=>router('/counterse')}>go to counterse</button>

           


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