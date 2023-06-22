import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setUser({ 
      name: "Francesca", 
      lastname : "Neri",
      username: "francescaneri", 
      email: "f.neri@example.com",
      password: "qwerty", 
      roles: ["MODERATOR", "USER"] 
 }))
  })
  return (
    <>
      {/* false per off canvas, sm,md,ecc.. per altre  */}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
      {/* false per off canvas, sm,md,ecc.. per altre  */}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" className="ms-5">
              ENERGIX
            </Navbar.Brand>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
              <Form.Control type="search" placeholder="Search" className="ms-2" aria-label="Search" />
            </Form>
            <div className="d-flex">
              <h3 className="align-self-end align-self-center me-3 ">MENU</h3>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            </div>
            <Navbar.Brand href="#" className="ms-5">
              ENERGIX
            </Navbar.Brand>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
              <Form.Control type="search" placeholder="Search" className="ms-2" aria-label="Search" />
            </Form>
            <div className="d-flex">
              <h3 className="align-self-end align-self-center me-3 ">MENU</h3>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>MENU</Offcanvas.Title>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>MENU</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
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

export default NavBar;

