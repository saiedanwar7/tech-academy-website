import React from 'react';
import './Instructor.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('/instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))

    }, [])
    console.log(instructors);
    return (
        <div>
            <Container className="mt-5">

                <Row xs={1} md={3} className="g-5">
                    {
                        instructors.map(instructor => <Col key={instructor.courseId}>
                            
                            <Card className="text-center h-100 inst-card">

                                <div className="mt-2">
                                    <img className="inst-img" src={instructor.image} alt="" />
                                </div>

                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{instructor.name}</Card.Title>
                                    <p>{instructor.profession}</p>
                                    <hr />
                                    <Card.Text>
                                        {instructor.description}
                                    </Card.Text>
                                    <div className="mt-auto ">
                                        
                                    </div>
                                </Card.Body>

                            </Card>

                        </Col>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Instructor;

