import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

function ProductDetails({ onClick }) {
    const navigate = useNavigate();

    // const Navigate = useNavigate();
    const location = useLocation();

    const { id } = location.state;
    console.log(id, "test 000");
    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
        axios.get(`https://caffa.smsoman.com/api/V1/product/${id}`, {
            headers: {
                'Authorization': 'Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS'
            }
        })
            .then((response) => {
                // console.log(response.data, "product details");
                setProductDetails(response.data.data.product)
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });


    }, [id])

    const handleAddCart = () => {
        onClick(productDetails);
        navigate('/cart')

    }

    return (
        <div className="product-details pt-4">
            <Container>
                <Row className='w-100'>
                    <Col className="d-flex justify-content-center">
                        <div className="sectionOne p-3">
                            <img className='Product' width={416} height={416} src={productDetails.image} alt="product" />
                            <div className="NavBtn w-100 text-center ">
                                <button>BUY NOW</button>
                                <button onClick={handleAddCart}>ADD TO CART</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="sectionTwo pt-4">
                            <h3>{productDetails.name}</h3>
                            <div className="ratings d-flex">
                                <div >4.5 &nbsp;<FontAwesomeIcon icon={faStar} /></div>
                                <p>27,827 Ratings & 1,891 Reviews</p>
                            </div>
                            <div className="price d-flex align-items-center">
                                <h2>
                                    <strong>
                                        &#8377; {productDetails.price} &nbsp;
                                    </strong>
                                </h2>
                                <h4 style={{ textDecoration: 'line-through', color: 'gray' }}>
                                    &#8377; 199
                                </h4>
                            </div>
                            <div className="delivery d-flex">
                                <h5 className='text-secondary p-2'>Location</h5>
                                <div className='location p-1'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <input className='locInput' type='text'></input>
                                    change
                                </div>
                            </div>

                            <div className='d-flex pt-4'>
                                <h5 className='text-secondary p-2'>Descriptions</h5>
                                <div className='p-2'>
                                    {productDetails.description}
                                    <br />
                                    <br />
                                    <p>Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quibusdam odit corporis quo nihil aspernatur aliquam
                                        temporibus iure quod rerum ex ea delectus adipisci esse ipsa cumque inventore,
                                        laborum animi similique.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetails