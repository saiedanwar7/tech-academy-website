import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import {Col, Container, Row } from 'react-bootstrap';
import './CourseDetails.css'

const CourseDetails = () => {
    const { courseId } = useParams();
    const [courses, setCourses] = useState([]);
    console.log(courseId);

    useEffect(() => {
        fetch('/techAcademy.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, []);
    console.log(courses);
    const course = courses?.find(cours=>cours.courseId===courseId)
    console.log(course);
    

    return (
        <Container className="mt-5">
            <h1 className="text-info">Course Details</h1>
            
            <hr />
            <h3 className="mb-5">{course?.courseTitle}</h3>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <h4>Course Summary</h4>
                    <hr />
                
                    <p className="text-start">{course?.courseDescription}</p>
                    <br />
                    <h4>Requirements</h4>
                    <hr />
                    <p className="text-start">{course?.Requirement}</p>

                </Col>
                <Col>
                    <h4>Course Highlight</h4>
                    <hr />
                    <ul className="text-start">
                        {
                            course?.courseHighlight?.map(high=><li key={high}>{high}</li>)    
                        }
                    </ul>

                </Col>
            </Row>




        </Container>
    );
};

export default CourseDetails;