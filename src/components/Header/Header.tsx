import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="mb-4">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">NEO LIST</Navbar.Brand>
    
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
          <Nav className="me-auto gap-3">
            <Link to="/" className="link-primary">
              Home
            </Link>

            <Link to="/neo" className="link-primary">
              NEO
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;