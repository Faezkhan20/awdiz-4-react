import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state } = useContext(AuthContext);
  const [cartProducts, setCartProducts] = useState([]);
  const router = useNavigate();

  async function getYourCartProduct() {
    try {
      
    } catch (error) {
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
      
      <div>
            {cartProducts.map((pro) => (
                <div key={pro._id} >
                    <img src={pro.image} />
                    <h3>{pro.name}</h3>
                    {/* <button onClick={() => router(`/update-product/${pro._id}`)}>Update ?</button> */}
                    {/* <button onClick={() => deleteProduct(pro._id)}>Delete ?</button> */}
                </div>
            ))}
        </div>
      
    </>
  )
}
export default Cart;