import { Button, Col, Container, Row } from 'react-bootstrap';
import './pages.scss'
import Carous from '../components/carousel/Carous';
import article1 from '../assets/4.png'
import article2 from '../assets/compost.webp'

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Carous/>
            <Container className ="homePagaContainer">
                <section className="articleContainer">
                    <h2 className="text-align-center">Te puede interesar... 🌲</h2>
                    <Row className="articleRow">
                        <Col className="my-2" xs={12} md={4}>
                            <img src={article1} alt="" />
                        </Col>
                        <Col xs={12} md={8} className="mt-2 text-article">
                            <h3>¿Usas fertilizantes?</h3>
                            <p>Hola amigues de Plantusqui! Hoy les traemos data útil sobre fertilizantes, sus tipos y usos. Nos parece muy importante entender que nuestras plantas necesitan un buen alimento para su sano y buen crecimiento. 
                            Hacernos una rutina para darle morfi a las plantus es tan necesario como regarlas 🌲.
                            </p>
                            <Button
                                variant="success"
                                onClick={()=>navigate("/article1")}
                                size='sm'>
                                    Ver más 💚
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="articleRow">
                        <Col xs={12} md={8} className="text-article">
                            <h3>¿Conocés el compostaje?</h3>
                            <p>
                                Buenas buenas! Hoy les contamos un poco sobre este el compost. Vamos a hacer una introducción sobre qué se trata y evacuamos algunas dudas. 🤩
                            </p>
                            <Button
                                variant="success"
                                onClick={()=>navigate("/article1")}
                                size='sm'>
                                    Ver más 💚
                            </Button>
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
