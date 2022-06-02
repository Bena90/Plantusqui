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
        <Navbar bg="light" expand="lg" className="">
        <Container>
            <Navbar.Brand>
                <Link to="/">
                    <img src='/plantusqui.png' width="30" height="30" className="d-inline-block align-top" alt="Logo"/>
                </Link>
                <Navbar.Brand>
                    <Link className="navTitle" to="/">Plantusqui</Link>
                </Navbar.Brand>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                    <Link className="navLink linkContent" to="/">Inicio</Link>
                    <Link className="navLink linkContent" to="products">Plantus</Link>
                    <Link className="navLink linkContent" to="about">Nosotros</Link>
                    <Link className="navLink linkContent" to="contact">Contacto</Link>
                {(currentUser === null) ? (
                    <NavDropdown title="account_circle" className="material-icons-outlined linkContent pipi" id="basic-nav-dropdown">
                        <div className='d-flex flex-column'>
                            <Link to="/login" className= "m-1  navLink dropDownStyle" >
                                Login
                            </Link>
                        </div>
                    </NavDropdown>
                ):(
                    <NavDropdown title="account_circle" className="material-icons-outlined linkContent pipi" id="basic-nav-dropdown">
                        <div className='d-flex flex-column'>
                            <Link to="/panel" className= "m-1 navLink dropDownStyle" >
                                    Panel Usuario
                            </Link>
                        </div>
                    </NavDropdown>
                )}
                <Link className="navLink linkContent" to="cart">
                    <div className='cartIconContainer'>
                        <ShoppingCartOutlinedIcon />
                        {cart.length > 0 && 
                            <div className="indexDiv">
                                <span className="cartIndex">{navCounter}</span>
                        </div>}                                        
                    </div>
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
                            
    )
}
export default NavBar;
