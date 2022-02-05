import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './pages.scss'
import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'
import article1 from '../assets/4.png'
import { UserContext } from '../context/cartContext';
import { useContext } from 'react';


const HomePage = () => {

    //const { name, email, img } = useContext(UserContext)

    return (
        <Container>
            <div className ="homePagaContainer">
                <section  className='carousel'>
                    <h1>Bienvenido a Plantusqui</h1>

                    <div className ="carouselContainer">
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={first}
                                    alt="Primera Imagen"
                                    />
                                    <Carousel.Caption>
                                        <div className="divCarousel">
                                            <h3>Primera Imagen</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={second}
                                    alt="Segunda Imagen"
                                    />

                                    <Carousel.Caption>
                                        <div className="divCarousel">
                                            <h3>Segunda Imagen</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={third}
                                    alt="Tercera Imagen"
                                    />

                                    <Carousel.Caption>
                                    <div className="divCarousel">
                                            <h3>Tercera Imagen</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>    
                    </div>
                </section>
                <section className="articleContainer">
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={article1} alt="" />
                        </Col>
                        <Col xs={12} md={6} className="text-article">
                            <h2>¿Usas fertilizantes?</h2>
                            <hr />
                            <p>Hola amigues de Plantusqui! Hoy les traemos data útil sobre fertilizantes, sus tipos y usos. Nos parece muy importante entender que nuestras plantas necesitan un buen alimento para su sano y buen crecimiento. 
                            Hacernos una rutina para darle morfi a las plantus es tan necesario como regarlas.
                            </p>
                            <Button variant="success">Ver mas...</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="text-article">
                            <h2>¿Usas fertilizantes?</h2>
                            <hr />
                            <p>Hola amigues de Plantusqui! Hoy les traemos data útil sobre fertilizantes, sus tipos y usos. Nos parece muy importante entender que nuestras plantas necesitan un buen alimento para su sano y buen crecimiento. 
                            Hacernos una rutina para darle morfi a las plantus es tan necesario como regarlas.
                            </p>
                            <Button variant="success">Ver mas...</Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={article1} alt="" />
                        </Col>
                    </Row>
                </section>
            </div>
            
        </Container>
    );
};

export default HomePage