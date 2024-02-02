import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
  return (
    <Card style={{ width: '40rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Hello, My name is Terrence McCarthy </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default About;