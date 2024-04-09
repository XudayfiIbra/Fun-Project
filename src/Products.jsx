import Axios from 'axios'
import { useState } from 'react';


const Products = () => {
    const [product, setProducts] = useState("")
    const productFetching = () => {
        Axios.get('http://127.0.0.1:8000/api-products/')
        .then((response) => {
            setProducts(response.data[0].name)
        })
    }
    return (
        <>
            <div>
                <button onClick={productFetching}>Products</button>
                <h1>{product}</h1>
            </div>
        </>
    )
}
export default Products;