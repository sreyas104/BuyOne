import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import axios from 'axios';

function ProductList() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.post('http://caffa.smsoman.com/api/V1/products', null, {
            headers: {
                'Authorization': 'Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS'
            }
        })
            .then((response) => {
                // console.log(response.data.data.products);
                setProduct(response.data.data.products)
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
    }, [])
    console.log(product, "product")
    return (
        <div className='d-flex justify-content-between m-5 '>
            {product.map((data, index) => {
                return (
                    <Cards className='m-3' key={index} data={data} />
                )
            })}
        </div>
    )
}

export default ProductList