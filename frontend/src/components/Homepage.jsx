import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";

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
            <button id='logincss' onClick={()=>router('/pagenotfound')}>go to pagenotfound</button>
            <button id='logincss' onClick={()=>router('/classcomponent')}>go to classcomponent</button>
            <button id ='logincss' onClick={() => toast.error("Clickedd")}>Click for toast error</button>
            <button id ='logincss' onClick={() => toast.success("Clickedd")}>Click for toast success</button> 
            <button id='logincss' onClick={()=>router('/product')}>go to product page</button>
            <button id='logincss' onClick={()=>router('/add-product')}>go to add- product page</button>
            <button id='logincss' onClick={()=>router('/use-memo')}>go to usememo page</button>

           


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