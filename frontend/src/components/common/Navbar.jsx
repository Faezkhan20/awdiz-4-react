import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import './Navbar.css'

const Navbar = () => {
    const router = useNavigate()
    const { state, Logout } = useContext(AuthContext)

    return (
        <div id='NavbarDiv'>
            <div onClick={() => router('/')} style={{ width: '20%', }}>Home</div>
            <div id='navbardiv2'>
                <div onClick={() => router('/products')}>Products</div>
                {/* <div onClick={() => router('/resgister2')}>Register</div> */}
                
                {state?.user?.id &&
                    <div id='navbar3'>
                        <div onClick={() => router('/add-product')}>Add Product </div>
                        <div onClick={() => router('/your-products')}>Your Products</div>
                        
                    </div>
                }
            </div>
            <div id='navbar4'>
                {state?.user?.id ? <>
                    <div onClick={() => router('/profile')}>Profile</div>
                    <div onClick={() => router('/cart')}>Cart</div>
                    <div onClick={Logout}>Logout</div>
                </> :<div onClick={() => router('/login')}>Login</div>}

                
            </div>
        </div >
    )
}

export default Navbar
