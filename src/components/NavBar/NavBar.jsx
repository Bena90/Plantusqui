import './NavBar.scss'
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from './logo192.png'
import cartIcon from '../../assets/cart.png'
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { useAuth } from '../../context/authContext';

const NavBar = () => {
    const { cart, navCounter } = useContext(CartContext);
    const { currentUser } = useAuth();
    return(
        <Navbar className='navStyle' collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand>
                <Link to="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo"/>
                </Link>
            </Navbar.Brand >
            <Navbar.Brand>
                <Link className="navTitle" to="/">Plantusqui</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="linkContent">
                            <li>
                                <Link className="navLink" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="navLink" to="products">Products</Link>
                            </li>

                            <li>
                                <Link className="navLink" to="about">About</Link>
                            </li>
                            <li>
                                <Link className="navLink" to="contact">Contact</Link>
                            </li>
                        
                            {(currentUser === null) ? (
                                <NavDropdown title="account_circle" className="material-icons-outlined" id="basic-nav-dropdown">
                                    <Link to="/login" className= "dropDownStyle" >
                                        Login
                                    </Link>
                                </NavDropdown>
                            ):(
                                <NavDropdown title="account_circle" className="material-icons-outlined" id="basic-nav-dropdown">
                                    <Link to="/panel" className= "dropDownStyle" >
                                        Panel Usuario
                                    </Link>
                                </NavDropdown>
                            )}
                            <li>
                                <Link className="navLink" to="cart">
                                    <div className='cartIconContainer'>
                                        <img src={cartIcon} alt="cartIcon" />
                                        {cart.length > 0 && 
                                            <div className="indexDiv">
                                                <span className="cartIndex">{navCounter}</span>
                                        </div>}                                        
                                    </div>
                                </Link>
                            </li>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;
