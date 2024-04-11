import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


// find exact years for education tabs

const Resume = () => {
  const appColor = {
    background: '#bde0fe'
  }
  
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <Card style={appColor}> 
            <Card.Body>
              <h2>Terrence McCarthy</h2>
              <p>Email: Terrencemccarthycode@gmail.com</p>
              <p>Phone: (682) 429-3347</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={appColor}>
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
          <Card style={appColor}>
            <Card.Body>
              <h5>Education</h5>
              <p>Pursuing Computer Science bachelors degree from UTA - 3.4 GPA - Current</p>
              <p>Harvard CS50x certificate - Current</p>
              <p>Certificate from SMU Full Stack coding bootcamp - %98.73 - 2024</p>
              <p>Associate degree from TCC - 2.6 GPA - 2021</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card style={appColor}>
            <Card.Body>
              <h5>Experience</h5>
              <p>free lance full stack web development - Current </p>
              <p>Uber Eats delivery driver - Current</p>
              <p>Evolution Moving Company, Fort Worth (Crew Lead) - March 2020 to January 2024</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card style={appColor}>
            <Card.Body>
              <h5>Full Resume</h5>
              <p><a href='https://docs.google.com/document/d/1hViApbiCHLunWTxOtTL0UaQuC6lwMpfYAzatJVNgxU4/edit#heading=h.cyduej5y5z6g'>Click here to view my full resume!</a></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
