import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample({ darkMode = false }) {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{
            background: darkMode
              ? 'linear-gradient(to right , #222, #333)'
              : 'linear-gradient(to left, #d4fc79, #96e6a1)',
            color: darkMode ? '#fff' : '#000',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 1s ease-in',
            borderRadius: '0 0 3px 2px',
            marginBottom: '1rem',
          }}
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ fontSize: '1.2rem', color: '#333', margin: '10px', padding: '5px' }}>ভালুকা</h1>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* আপনার সব Nav.Link এবং NavDropdown আইটেম এখানেই থাকবে, কোন পরিবর্তন করা লাগবে না */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
