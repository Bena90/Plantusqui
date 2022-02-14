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
                                <h4>Contacto</h4>
                                <ul className="list-unlysted">
                                    <li>15-5634-0008</li>
                                    <li>Buenos Aires, Argentina</li>
                                    <li>123 Av. Siempre Viva</li>
                                </ul>
                            </Col>
                            <Col className='col-4'>
                                <h4>Staff</h4>
                                <ul className="list-unstyled">
                                    <li>Fede 🧑‍</li>
                                    <li>Stefy 👩</li>
                                </ul>
                            </Col>
                            <Col className='col-4'>
                                <h4>Redes sociales</h4>
                                <div className="list-social-media d-flex justify-content-center">
                                    <a href="https://www.facebook.com/"><img src={instagram}/></a>
                                    <a href="https://www.instagram.com/"><img src={facebook}/></a>
                                    <a href="https://www.instagram.com/"><img src={whatsapp}/></a>
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