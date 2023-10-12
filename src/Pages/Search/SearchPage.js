import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const Navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');
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


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = product.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProductClick = (val) => {
        console.log(val, "88");
        Navigate('/product-details', { state: { id: val } });

    }
    return (
        <div className='text-center p-4'>
            <h1>SEARCH PAGE</h1>
            <div >
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className='p-5'>
                {filteredProducts.length > 0 ? (
                    <div>
                        {
                            filteredProducts.map((product) => (
                                <div className='p-1 w-100' style={{ cursor: "pointer" }} key={product.id}>
                                    {/* {console.log(product.id, "777")} */}
                                    <div className='d-flex  align-items-center' onClick={() => {
                                        handleProductClick(product.id);
                                    }}>
                                        <img src={product.image} width={100} height={100} alt='product' />
                                        <h3>{product.name} - &#8377;{product.price}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
