import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

//  why is my text not changing to white? even after importing css that has !important

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar expand="lg" className="bg-secondary bg-gradient">
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="white-text">
              <Link to={'/'} className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/About'} className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About Me</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/Project'} className={currentPage === '/Project' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/Resume'} className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </Nav.Link>
            <Nav.Link className="white-text">
              <Link to={'/Contact'} className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;