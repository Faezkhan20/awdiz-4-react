import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';
import './SingleProductNew.css'

const SingleProductNew = () => {
    const { id } = useParams();
    const [productData, SetProductData] = useState({})

    useEffect(() => {

        async function getSingleProductData() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                if (data) {
                    SetProductData(data);
                }
            }catch(error){
                console.log(error, "error")
            }
        }
        if (id) {
            getSingleProductData()
        }
    }, [id])

    console.log(productData, " product data ");
    return (
        <div>

            {productData?.id ?
                <div className="screen-SPN">
                    <div className="image-SPN" > <img src={productData.image} /> </div>

                    <div className="discription-SPN" >
                        <h3><span>NAME </span>: {productData.title}</h3>
                        <h5><span>CATEGORY </span>: {productData.category}</h5>
                        <h5><span>ABOUT</span> : {productData.description}</h5>
                        <h3><span>PRICE</span> : {productData.price} $</h3>
                        <h5><span>RATING</span> : {productData.rating.rate}</h5>
                        <h5><span>RATING COUNT</span> : {productData.rating.count}</h5>
                    </div>
                </div>
                :
                <div>Loading...</div>}

        </div >
    )
}

export default SingleProductNew