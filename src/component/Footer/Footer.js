import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
   
    return (
        <div className="footer mt-5 bg-dark text-light pt-5 pb-4">
            <Container>
                <Row>
                    <Col className="col-3">
                        <h3>Address</h3>
                        <p>Banani Model Town,
                            Awal Centre <br />
                            Banani, Dhaka</p>
                    </Col>
                    
                    <Col className="col-6">
                          <h1>Course List</h1>
                          <div className="text-center">
                          <p>C Programming For Beginners</p>
                          <p>Python for Beginners</p>
                          <p>React JS Web Development</p>
                          </div>
                    </Col>

                    <Col className="col-3 text-start">
                        <p>About Us</p>
                        <p>Terms and conditions</p>
                        <p>Privacy Policy</p>
                        <p>Call - 018520-0000</p>
                 
                    </Col>
                   
                    

                </Row>
            </Container>

        </div>
    );
};

export default Footer;