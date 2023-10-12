import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const bearerToken = 'EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS'; // Replace with your actual bearer token

        try {
            // Send a POST request to the login API endpoint with the Authorization header
            const response = await axios.post('http://caffa.smsoman.com/api/V1/integration/customer/token', formData, {
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                },
            });

            // Handle successful login (e.g., redirect to dashboard)
            console.log('Login successful:', response.data);

            // Reset the form
            setFormData({
                username: '',
                password: '',
            });
            setError('');
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);

            // Display an error message to the user
            setError('Invalid username or password.');
        }
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="text-center mt-4">Login</h2>
                    <Form className="pt-5" onSubmit={handleLogin}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        {error && <p className="text-danger">{error}</p>}

                        <Button variant="primary" type="submit" className="mt-3 w-30">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
