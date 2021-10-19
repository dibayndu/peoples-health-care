import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut}=useAuth();
    return (
<>
        
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
<Container>
<Navbar.Brand href="#home">People's Health Care</Navbar.Brand>
          
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
<Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
<Nav.Link as={Link} to="/experts" className="text-white">Experts</Nav.Link>
<Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
{user?.email ?
<Button onClick={logOut} variant="primary">Log Out</Button> :
    <Nav.Link as={Link} to="/login" className="text-white">Log In</Nav.Link>

}

<Navbar.Text>Signed in as: <a href="#login">{user?.displayName}</a></Navbar.Text>
</Navbar.Collapse>
   
</Container>
</Navbar>
<h1 className="text-primary">People's Health Care</h1>
<h5 className="text-primary">Transforming HealthCare</h5>
      
</>
    );
};

export default Header;