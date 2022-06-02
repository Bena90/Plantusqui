import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { useAuth } from '../../context/authContext';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './NavBar.scss'

const NavBar = () => {
    const { cart, navCounter } = useContext(CartContext);
    const { currentUser } = useAuth();
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <li>
                    <Link className="navLink" to="/">Inicio</Link>
                </li>
                <li>
                    <Link className="navLink" to="products">Plantus</Link>
                </li>

                <li>
                    <Link className="navLink" to="about">Nosotros</Link>
                </li>
                <li>
                    <Link className="navLink" to="contact">Contacto</Link>
                </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar;
