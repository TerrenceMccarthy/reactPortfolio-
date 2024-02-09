import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';

const ContactForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://getform.io/f/9b7e905d-8bc1-4056-93c6-b9f4f5961bad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setShowMessage(true); // Show the success message
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <Container className='mt-5 mb-5'>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {showMessage && (
              <Alert variant="success" className="mb-3">
                Thank you, email sent!
              </Alert>
            )}

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Form.Control type="text" placeholder="Enter your name" {...field} />
                )}
              />
              {errors?.name && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Form.Control type="email" placeholder="Enter your email" {...field} />
                )}
              />
              {errors?.email && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
            </Form.Group>

            <Form.Group controlId="formText">
              <Form.Label>Email Text</Form.Label>
              <Controller
                name="text"
                control={control}
                render={({ field }) => (
                  <Form.Control type="text" placeholder="Enter Text for the email" {...field} />
                )}
              />
              {errors?.text && <Form.Text className="text-danger">This field is required</Form.Text>}
            </Form.Group>

            <Row className="justify-content-center">
              <Col md={2}>
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
