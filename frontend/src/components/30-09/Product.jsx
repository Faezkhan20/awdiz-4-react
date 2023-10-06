import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import "./Product.css"
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const router = useNavigate();

    const [product,setproduct]=useState([])


    useEffect(()=>{
        // toast.success("page renderd")
        async function getProducts(){
            try{
                const {data} =await axios.get('https://fakestoreapi.com/products')
                console.log(data,"data here")
                setproduct(data)
            }catch(error){
                toast.error(error.message)
            }
        }
        getProducts()

    },[])
  return (
    <div>
        { product?.length? <div id='promain1'>
             {product.map((pro)=>(
         <div  onClick={() => router(`/single-product/${pro.id}`)} id='promain'> 
            <img id='proimage' src={pro.image}/>
            <h3>Name : {pro.title}</h3> 
            <h4>Price : {pro.price} $</h4> 
            <button id='probutton'>Add to cart</button>
             </div>
           
        ))}  </div>: <div>loading.....</div> }
    </div>
  )
}

export default Product