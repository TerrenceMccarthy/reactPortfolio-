import { Link, useLocation } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// issues with blurry background image for nav

// issue with moving my nav tabs around with out messing up the nav drop down for smaller screens

const navbarBackground = {
  backgroundImage: 'url(/src/images/test2.jpg)'
}
 const navbarStyle = {
  justifyContent: 'center',
  display: 'flex'
  // position: 'absolute',
  // top: '100px',
  // right: '100px',
  // fontSize: '30px',
  // fontWeight: 'bold'
 }

 const navbar = {
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '100',
 }

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar expand="lg" className="bg-secondary bg-gradient">
      <Container >
        <Navbar.Brand ><img src='' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link >
              <Link to={'/'} className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/About'} className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About Me</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/Project'} className={currentPage === '/Project' ? 'nav-link active' : 'nav-link'}>Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/Resume'} className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/Contact'} className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;