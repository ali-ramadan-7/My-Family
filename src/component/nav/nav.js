import "./nav.css"
import { Fragment } from 'react'
import { Nav , NavDropdown , Navbar , Container } from "react-bootstrap"
import Logo from '../../img/rdrimages.png';

function Navs() {
  return (

      <Fragment>
                <Navbar bg="light" expand="lg" className='mt-0 fixed-top'>
                <Container>
                <Navbar.Brand  href="/" className='logo'>
                <img
          src={Logo}
          alt="logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto ">
            <Nav.Link href="/" className='home mr-3'>Home</Nav.Link>
            <Nav.Link href="/story" className='mr-3'>Our Story</Nav.Link>
            <Nav.Link href="/events" className='mr-3'>Events</Nav.Link>
            <Nav.Link href="/gallery" className='mr-3'>Gallery</Nav.Link>
            <NavDropdown title="Dropdown" className='mr-3' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown title="Dropdown" className='mr-5 sc-dropdown' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#contact" >Conact </Nav.Link>
            </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </Fragment>
  )
}

export default Navs
