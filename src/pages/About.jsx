import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const appColor = {
    background: '#bde0fe'
  }
  return (
    <Container>
      <Card className="mt-5 mb-5" style={appColor}>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img src="/src/images/selfImg.jpg" alt="Image of my self" className="img-fluid" />
            </Col>
            <Col md={8}>
              <Card.Body className='fs-5'>
                <p>
                  Hello, My name is Terrence McCarthy and I am a 24 years old and learning to be a full stack developer. I have always loved being on my computer
                  and being able to create so coding was the perfect path for me.
                </p>
                <p>
                  I am from Benbrook, Texas which is a smaller city outside of Fort Worth. I have lived here my entire life and have loved it.
                  Although I do love my city and state I do love to travel when the opportunity presents its self. I would consider my self
                  an introvert that loves to stay home but I do enjoy meeting new people that share the same interest as me.
                </p>
                <p>
                  I started my pursuit of learning how to code about 2 years ago when I completed my associate degree from TCC and started
                  taking my first coding related classes. I loved the classes but my current job as a crew lead for a moving company caused
                  me to have to go part time and not get my degree as fast as I would have liked. As a result I put my degree on pause to
                  enroll in a full stack coding boot camp so I can get my foot in the door of the tech world. Once I have completed the
                  bootcamp I intend to get a tech job and resume my computer science degree.
                </p>
                <p>
                  My end goal is still up in the air! Although I know I want to continue on the path of software development and being able to
                  create. Some paths that have stuck out to me are things like AI, coding in Aviation, Blockchain and game development.
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
