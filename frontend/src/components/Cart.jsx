import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../Helpers/AxiosConfig";
import './Cart.css'

const Cart = () => {
  const { state } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
  const router = useNavigate();

  async function getYourCartProduct() {
    try {
      const response = await api.post('/user/add-cart-product', { userId: state?.user?.id })
      if (response.data.success) {
        toast.success(response.data.message)
        setCartProducts(response.data.products)
        console.log(cartProducts,"products")
        
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteProduct(productId){
    try{  
      const response=await api.post('/user/delete-cart',{productId,userId:state?.user?.id})
      if(response.data.success){
        toast.success(response.data.message)
        setCartProducts(response.data.products)
      }
    }catch(error){
      console.log(error)
    }

  }



  useEffect(() => {
    try {
      if (state?.user && state?.user?.id === undefined) {
        toast.error("Please login to access your cart products.")
        setTimeout(() => {
          router("/login")
        }, 2000);
      } else {
        if (state?.user?.id) {
          getYourCartProduct()
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [state])

  return (
    <>
      <div id="cartscreen">

        {cartProducts?.length ? <div id="cartmain">
          {/* <h1>Total Price - {totalPrice}</h1> */}
          {cartProducts.map((pro) => (
            <div  id="cartcontent">
              <h1>{pro.name}</h1>
              <img src={pro.image} alt="" />
              <h3>{pro.category}</h3>
              <h3>{pro.price}</h3>
              <button onClick={() => deleteProduct(pro._id)}>Delete</button>

            </div>
            
            
          ))}
        </div> : <div>Loading..</div>}
      </div>
    </>
  )
}
export default Cart