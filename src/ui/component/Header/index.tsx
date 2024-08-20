import {Button, Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import "./style.css";

export default function Header(){

  const brandLogo = () => (
    <img className="brandLogo" src="https://www.ikea.com.hk/webroot/img/logos/IKEA_logo.svg?v=1723531235"/>
  )

  return(
    <>
      {[false].map((expand) => (
        <Navbar expand={expand} className="bg-body-tertiary mb-3" id="top-bar">
          <Container fluid >
            {brandLogo()}
            <Navbar.Brand href="#" ></Navbar.Brand>
            <Button variant="light">Light</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {brandLogo()}
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
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
  )
}