import './footer.scss';
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'
import footer from '../../assets/footer.png'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="main-footer">
            <img src={footer} className="w-100" alt="" />
            <div className="containerFooter">
                <Container>
                    <div>
                        <Row>
                            <Col className='col-4'>
                                <h5>Contacto</h5>
                                <ul className="list-group-item">
                                    <li className="list-group-item">15-5634-0008</li>
                                    <li className="list-group-item">Buenos Aires, Argentina</li>
                                    <li className="list-group-item">123 Av. Siempre Viva</li>
                                </ul>
                            </Col>
                            <Col className='col-4'>
                                <h5>Staff</h5>
                                <ul className="list-group-item">
                                    <li className="list-group-item">Fede 🧑‍</li>
                                    <li className="list-group-item">Stefy 👩</li>
                                </ul>
                            </Col>
                            <Col className='col-4'>
                                <h5>Redes sociales</h5>
                                <div className="list-social-media d-flex justify-content-center mt-4">
                                    <a href="https://www.instagram.com/plantusqui/"><img src={instagram} alt="mediaInstagram" /></a>
                                    <a href="https://www.facebook.com/"><img src={facebook} alt="mediaFacebook" /></a>
                                    <a href="https://www.instagram.com/"><img src={whatsapp} alt="mediaWhatsapp" /></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="pt-2 pb-2">
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} Plantusqui | All right reserve | Terms Of Service | Plantusqui by Esteban Benabarre
                        </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;