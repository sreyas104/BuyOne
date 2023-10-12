import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import './Cart.css'

function CartPage() {
    const [cartThings, setCartThings] = useState([])

    useEffect(() => {
        axios.post('http://caffa.smsoman.com/api/V1/products', null, {
            headers: {
                'Authorization': 'Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS'
            }
        })
            .then((response) => {
                console.log(response.data.data.products, '565');
                setCartThings(response.data.data.products)
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
    }, [])

    const handleIncrement = (item) => {
        const updatedCart = cartThings.map((cartItem) => {
            if (cartItem.id === item.id) { // Fixed the comparison here
                return { ...cartItem, quantity: cartItem.quantity + 1 }; // Fixed cartThings to cartItem
            }
            return cartItem;
        });
        setCartThings(updatedCart);
    };

    const handleDecrement = (item) => {
        const updatedCart = cartThings.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });
        setCartThings(updatedCart);
    };

    const handleRemove = (item) => {
        const updatedCart = cartThings.filter((cartItem) => cartItem.id !== item.id);
        setCartThings(updatedCart);
    };

    const calculateTotal = () => {
        return (cartThings.reduce((total, item) => total + item.price * item.quantity, 0)
        )
    };
    return (
        <div className="shoppingCart">
            <Container>
                <div className="cartContent p-4">
                    <h4>PROCEED TO BUY</h4>
                </div>
                {cartThings.map((item, index) => (
                    <Row key={index} style={{ maxWidth: "70%" }}>
                        <div className="cart d-flex">
                            <div className="sectionOneCart d-flex justify-content-evenly pt-3 pb-3" style={{ flex: '70%' }}>
                                <div className="ProImg" style={{ flex: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img
                                        width={100}
                                        height={140}
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <div className="ProDetail" style={{ flex: '70%' }}>
                                    <h5>{item.name}</h5>
                                    <h2>{item.price}</h2>
                                    <div className="quantity d-flex mb-2 pt-4">
                                        <div>
                                            <Button variant="secondary" size="sm" onClick={() => handleDecrement(item)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </Button>{' '}
                                            {item.quantity}{' '}
                                            <Button variant="secondary" size="sm" onClick={() => handleIncrement(item)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Button>
                                        </div>
                                        <div className="del ps-3">
                                            <Button variant="danger" onClick={() => handleRemove(item)} >
                                                DELETE <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                ))}
                <div className="sectionTwoCart p-2 ps-5 m-3 ml-2" style={{ flex: '30%' }}>
                    <h5>Total ({cartThings.length} items): {calculateTotal()}</h5>
                    <Button variant="warning">Proceed to Buy</Button>
                </div>
            </Container>
        </div>
    )
}

export default CartPage