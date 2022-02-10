import { Col, Container, Row } from "react-bootstrap";
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const AboutPage = () => {

    return (
        <Container className="aboutContainer">
            <h1>Sobre Plantusqui</h1>
            <Row className="aboutRow">
                <Col md={12} lg={7}>
                    <p className="aboutText">
                        Primero que nada HOLIS, un gusto. Somos Stefi y Fede, y nos complace inaugurar este emprendimiento! 💚
                    </p>
                    <p className="aboutText">
                        Les contamos que Plantusqui es una tienda de plantas pero también es un espacio que diseñamos con amor y
                        entusiasmo, y que estará empapado de nuestros conocimientos, motivaciones y deseos de compartir cierta mirada.
                    </p>
                    <p className="aboutText">
                        Si bien sabemos que las plantas pueden darle belleza y color al ambiente, desde Plantusqui no las pensamos
                        como objetos que decoran un hogar, sino como fuentes de energía y oxígeno.
                    </p>
                </Col>
                <Col md={12} lg={5}>
                    <img src={about1} alt="about1" />
                </Col>
            </Row>
            <Row className="aboutRow">
                <Col md={12} lg={5}>
                    <img src={about2} alt="about2" />
                </Col>
                <Col md={12} lg={7}>
                    <p className="aboutText">
                        Por otro lado, buscamos contribuir a un pasaje sustentable y consciente con el medio ambiente, de modo que
                        en lo posible intentamos reducir el uso de macetas de plástico, y elegimos brindar otras opciones como macetas
                        de barro, cerámica o cemento. Estos productos, a su vez, provienen de la industria nacional porque nos parece
                        importante apoyarnos entre todes para seguir 💪
                    </p>
                    <p className="aboutText">
                        Este emprendimiento fusiona el arte de poner las manos en la tierra con las convicciones que hemos ido construyendo.
                        Nos interesa un tipo de jardinería en concordancia con el mundo que queremos.
                    </p>
                </Col>
            </Row>
            <h2>🌱 ¡Bienvenides a Plantusqui! ✨</h2>
        </Container>
    )
}

export default AboutPage;