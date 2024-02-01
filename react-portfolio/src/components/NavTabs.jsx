import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

function NavTabs() {
  // using useState to set the active link depending on where we are at
  const [activeLink, setActiveLink] = useState('home');
  // using useState to see if the user has scrolled and update our useState
  // to true if they have scrolled. If the user has scrolled then it will
  // update our state to true and end up changing the background half way through
  const [scrolled, setScrolled] = useState(false);

  // we use useEffect to actually call the setScrolled function and update the state
  // once the user has scrolled down %50 of the page then setScrolled is set to true
  // and we are able to implement another back ground image past %50
  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // event listener waits for the scroll to happen from the user and the user 
    // and calls the onScroll function to see if it is past the %50 mark of the 
    // webpage to update the state to true and change the background 
    window.addEventListener('scroll', onScroll);

    // removes the event listener so that it does not cause conflict after
    // it is initally called. useEffect will be called again and restart the process
    // once the user scrolls back above the %50 mark
    return () => window.removeEventListener('scroll', onScroll);
  }, [])


  return (
    // change bg-body to change color of navbar
    <Navbar expand="lg" className="bg-info-subtle"> 
      <Container>
        {/* input logo here */}
        <Navbar.Brand href="#home">
          <img src={''} alt='Logo' />
        </Navbar.Brand>
        {/* creates a toggle down for smaller UI screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        {/* nav tabs */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;

// initial attempt at nav bar

// const headerStyle = {
//   backgroundImage: 'url(src/images/test2.jpg)',
//   backgroundSize: '100% auto',
//   // backgroundRepeat: 'no-repeat',
//   // width: '%100',
//   height: '200px',
//   // justifyContent: 'center',
//   // alignItems: 'center',
// }

// const ulStyle = {
//   color: 'gray',
//   // display: 'flex',
//   // justifyContent: 'center',
//   // alignItems: 'center',
 
// }

// function NavTabs() {
//   const currentPage = useLocation().pathname;

//   return (
//     <div className='container-fluid' style={headerStyle}>
//       <ul className="list-unstyled fw-bold" style={ulStyle} >
//         <li className="nav-item" >
//           <Link
//             to="/"
//             className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//           >
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/About"
//             className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
//           >
//             About
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/Portfolio"
//             className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
//           >
//             Portfolio
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/Resume"
//             className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
//           >
//             Resume
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             to="/Contact"
//             className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

