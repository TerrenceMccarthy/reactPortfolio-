// Resume.jsx

// Resume.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Resume = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>Terrence McCarthy</h2>
              <p>Email: Terrencemccarthycode@gmail.com</p>
              <p>Phone: (682) 429-3347</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <h5>Skills</h5>
              <Row>
                <Col xs={4}>
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Express</li>
                  </ul>
                </Col>

                <Col xs={4}>
                  <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Node</li>
                  </ul>
                </Col>

                <Col xs={4}>
                  <ul>
                    <li>Testing</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h5>Education</h5>
              <p>Associate degree from TCC - FIND EXACT YEAR</p>
              <p>Started Computer Science degree classes from UTA - FIND EXACT YEAR</p>
              <p>Enrolled in SMU Full Stack coding bootcamp - Current</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <h5>Experience</h5>
              <p>No current IT work experience but multiple depolyed applications on Github</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
