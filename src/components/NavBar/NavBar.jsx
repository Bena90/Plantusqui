import './NavBar.scss'
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo192.png'


const NavBar = () => {
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
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;
