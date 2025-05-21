import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function OffcanvasExample() {
  const [darkMode, setDarkMode] = useState(false); // Add this line to enable darkMode

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
                <h1 style={{ fontSize: '1.2rem', color: '#333', margin: '10px', padding: '5px' }}>
                  ভালুকা
                </h1>
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
                <Nav className="justify-content-end flex-grow-1 pe-3" style={{ paddingRight: '.9rem' }}>
                  {/* All Nav.Link and NavDropdowns go here - unchanged */}
                  {/* Your existing nav links... */}
                  <Nav.Link as={Link} to="/home" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    হোম
                  </Nav.Link>
                  <Nav.Link as={Link} to="/JournalistsList" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    গাড়ি ভাড়া
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Mestiri_1" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    সকল মিস্ত্রী
                  </Nav.Link>
                  <Nav.Link as={Link} to="/House_rental_1" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    বাসা ভাড়া
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Cook_butcher_1" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    কসাই বাবুর্চি
                  </Nav.Link>
                  <Nav.Link as={Link} to="/attractions" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ক্লিনিং স্টাফ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/restaurants" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    রেস্টুরেন্ট
                  </Nav.Link>
                  <Nav.Link as={Link} to="/hotels" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    আবাসিক হোটেল
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cleaners" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    পরিচ্ছন্ন কর্মী
                  </Nav.Link>
                  <Nav.Link as={Link} to="/internet-service" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ইন্টারনেট সার্ভিস
                  </Nav.Link>
                  <Nav.Link as={Link} to="/famous-people" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    প্রসিদ্ধ ব্যক্তি
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about-valuka" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ভালুকার পরিচিতি
                  </Nav.Link>
                  <Nav.Link as={Link} to="/municipality" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    পৌরসভা
                  </Nav.Link>
                  <Nav.Link as={Link} to="/unions" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ইউনিয়ন
                  </Nav.Link>
                  <Nav.Link as={Link} to="/police" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    থানা পুলিশ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/fire-service" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ফায়ার সার্ভিস
                  </Nav.Link>
                  <Nav.Link as={Link} to="/upazila-administration" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    উপজেলা প্রশাসন
                  </Nav.Link>
                  <Nav.Link as={Link} to="/hospital" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ভালুকার হাসপাতাল
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Ambulance_1" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    এম্বুলেন্স
                  </Nav.Link>
                  <Nav.Link as={Link} to="/doctors" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ডাক্তার
                  </Nav.Link>
                  <Nav.Link as={Link} to="/banks" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    ব্যাংক সমূহ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/car-rental" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    বিউটি পার্লার
                  </Nav.Link>
                  <Nav.Link as={Link} to="/entrepreneurs" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    উদ্যোক্তা
                  </Nav.Link>
                  <Nav.Link as={Link} to="/marketplaces" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    হাট বাজার
                  </Nav.Link>
                  <Nav.Link as={Link} to="/complaints" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    অভিযোগ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/emergency-electricity" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    জরুরি বিদ্যুৎ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/marriage-registry" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    কাজী অফিস
                  </Nav.Link>
                  <Nav.Link as={Link} to="/courier-service" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    কুরিয়ার সার্ভিস
                  </Nav.Link>
                  <Nav.Link as={Link} to="/AdminDashboard" style={{ fontSize: '.9rem', color: '#007bff' }}>
                    লগইন
                  </Nav.Link>

                  <NavDropdown
                    title="পার্লার"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ color: '#007bff' }}
                  >
                    <NavDropdown.Item as={Link} to="/JournalistsList" style={{ fontSize: '.9rem', color: '#007bff' }}>
                      বিউটি পার্লার
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/JournalistsList" style={{ fontSize: '.9rem', color: '#007bff' }}>
                      জেন্টস পার্লার
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Service"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ color: '#007bff' }}
                  >
                    <NavDropdown.Item href="#action3">Website</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Facebook Pixel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Facebook Ads</NavDropdown.Item>
                  </NavDropdown>
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
