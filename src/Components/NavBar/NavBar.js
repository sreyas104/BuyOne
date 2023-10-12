import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const Navigate = useNavigate();
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home"><img width={100} src='https://www.freepnglogos.com/uploads/company-logo-png/raise-company-logo-digital-product-demo-9.png' alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-white">
                        <div className='p-1' style={{ cursor: 'pointer' }} onClick={() => {
                            Navigate('/');
                        }}>Home</div>
                        <div className='p-1' style={{ cursor: 'pointer' }} onClick={() => {
                            Navigate('/search');
                        }} >Search</div>
                        <div className='p-1' style={{ cursor: 'pointer' }} onClick={() => {
                            Navigate('/cart');
                        }}><FontAwesomeIcon icon={faCartShopping} />Cart</div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar