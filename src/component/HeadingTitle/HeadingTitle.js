import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeadingTitle.css'

const HeadingTitle = () => {

    const[courses, setCourse]= useState([])
    useEffect(() => {
        fetch('./techAcademy.json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])

    return (
        <div>
            <div className="heading-title d-flex align-items-center justify-content-center">
            <div className="heading-text">
            <h1 className="text-head" >Learn A Skill The World Is Yours</h1>
            <h2>Education is the key to unlock the Golden door of Freedom </h2>
            <h6>Country best online education system. We provide best IT knowledge to build your career.</h6>
            </div>

            </div>

            <Container className="mt-5">

                <Row xs={1} md={2} className="g-4">
                    {
                        courses.slice(0, 4).map(course => <Col  key={course.courseId}>
                            <Card className="course-card h-100">

                                <Card.Img className="card-img2" variant="top" src={course.image} />

                                <Card.Body className="course-body d-flex flex-column">
                                    <h3 className="h2">{course.courseTitle}</h3>
                                    <div className="d-md-flex justify-content-between mt-3 mb-3 ">
                                        <h5>Course Price : {course.price} BDT</h5>
                                        <h5>{course.courseLevel} | {course.courseType}</h5>
                                    </div>
                                    <Card.Text className="course-Des">
                                        {course.courseDescription.slice(0, 320)}...
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <Link to={`/course/${course.courseId}`}><button className="btn  p-2 w-100 btn-info details-btn">Details</button></Link>
                                    </div>

                                                                       
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>

            </Container>

                 <div className="mt-4 fs-4">
                    <Link to='/courses'>See More Courses..</Link>
                 </div>

        </div>

       
    );
};

export default HeadingTitle;



