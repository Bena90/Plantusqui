import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './pages.scss'
import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'
import article1 from '../assets/4.png'
import article2 from '../assets/compost.webp'
import div from '../assets/div.png'

import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <Container className ="homePagaContainer mb-4">
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
            </Container>
                <section className="">
                    <div className="articleDivision">
                        <img src={div} className="w-100 mt-4 mb-3" alt="background" />
                    </div>
                </section>
            <Container className ="homePagaContainer">
                <section className="articleContainer">
                    <h2 className="text-align-center">Te puede interesar... 🌲</h2>
                    <Row className="articleRow">
                        <Col xs={12} md={4}>
                            <img src={article1} alt="" />
                        </Col>
                        <Col xs={12} md={8} className="text-article">
                            <h3>¿Usas fertilizantes?</h3>
                            <p>Hola amigues de Plantusqui! Hoy les traemos data útil sobre fertilizantes, sus tipos y usos. Nos parece muy importante entender que nuestras plantas necesitan un buen alimento para su sano y buen crecimiento. 
                            Hacernos una rutina para darle morfi a las plantus es tan necesario como regarlas 🌲.
                            </p>
                            <Button variant="success" onClick={()=>navigate("/article1")} size='sm'>Ver más 💚</Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="articleRow">
                        <Col xs={12} md={8} className="text-article">
                            <h3>¿Conocés el compostaje?</h3>
                            <p>
                                Buenas buenas! Hoy les contamos un poco sobre este el compost. Vamos a hacer una introducción sobre qué se trata y evacuamos algunas dudas. 🤩
                            </p>
                            <Button variant="success" onClick={()=>navigate("/article2")} size='sm'>Ver más 💚</Button>
                        </Col>
                        <Col xs={12} md={4}>
                            <img src={article2} alt="" />
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    );
};

export default HomePage