import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../Helpers/AxiosConfig'
import { AuthContext } from '../Context/AuthContext'
import './YourProduct.css'


const YourProducts = () => {
    const router = useNavigate();
    const { state } = useContext(AuthContext)
    const [yourProducts, setYourProducts] = useState([]);

    console.log(yourProducts, "yourProducts here")

    async function getYourProduct() {
        try {
            const response = await api.post('/product/your-products', { id: state?.user?.id })
            if (response.data.success) {
                setYourProducts(response.data.products)
            }
        } catch (error) {
            console.log(error, "error here")
            toast.error(error?.response.data.message)
        }
    }

    async function deleteProduct(id) {
        // alert(id)
        try {
            const response = await api.delete('/product/delete-product', { params: { id } })
            if (response.data.success) {
                getYourProduct()
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error, "error here")
            toast.error(error?.response.data.message)
        }
    }

    useEffect(() => {
        if (state?.user && state?.user?.name === undefined) {
            router('/login')
            toast.error("Please login to access this page.")
        }

        if (state?.user && state?.user?.name !== undefined) {
            console.log("state?.user?.id", state)
            getYourProduct()
        }
    }, [state])

    return (
        <div id='yourproductdiv'>
            {yourProducts.map((pro) => (
                <div id='yourproductmain' key={pro._id} >
                    <img id='imgyourproduct' src={pro.image} />
                    <h3>{pro.name}</h3>
                    <button className='yourproductmain-button' onClick={() => router(`/update-product/${pro._id}`)}>Update ?</button>
                    <button className='yourproductmain-button' onClick={() => deleteProduct(pro._id)}>Delete ?</button>
                </div>
            ))}
        </div>
    )
}

export default YourProducts