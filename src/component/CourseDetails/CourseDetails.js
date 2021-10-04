import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import {Col, Container, Row } from 'react-bootstrap';

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
            <h1>Course Details</h1>
            <hr />
            <h3 className="mb-5">{course?.courseTitle}</h3>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <h4>Course Summary</h4>
                    <p>{course?.courseDescription}</p>
                    <br />
                    <h4>Prerequisite</h4>
                    <p>{course?.prerequisite}</p>

                </Col>
                <Col>
                    <h4>Course Highlight</h4>
                    <ul>
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