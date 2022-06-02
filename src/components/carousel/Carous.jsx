import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import first from '../../assets/1.jpg'
import second from '../../assets/2.jpg'
import third from '../../assets/3.jpg'

//Styles
import './Carous.styles.scss'


const Carous = () => {
  return (
    <Container className="bannerContainer">
        <h1>Bienvenido a Plantusqui</h1>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={first}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={second}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={third}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>




























//    <Container className ="homePagaContainer mb-4">
//    <section  className='carousel'>

//
//        <div className ="carouselContainer">
//                <Carousel variant="dark">
//                    <Carousel.Item>
//                        <img
//                        className="d-block w-100"
//                        src={first}
//                        alt="Primera Imagen"
//                        />
//                        <Carousel.Caption>
//                            <div className="divCarousel">
//                                <h3>Primera Imagen</h3>
//                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                            </div>
//                        </Carousel.Caption>
//                    </Carousel.Item>
//                    <Carousel.Item>
//                        <img
//                        className="d-block w-100"
//                        src={second}
//                        alt="Segunda Imagen"
//                        />
//                        <Carousel.Caption>
//                            <div className="divCarousel">
//                                <h3>Segunda Imagen</h3>
//                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                            </div>
//                        </Carousel.Caption>
//                    </Carousel.Item>
//                    <Carousel.Item>
//                        <img
//                        className="d-block w-100"
//                        src={third}
//                        alt="Tercera Imagen"
//                        />
//                        <Carousel.Caption>
//                        <div className="divCarousel">
//                                <h3>Tercera Imagen</h3>
//                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                        </div>
//                        </Carousel.Caption>
//                    </Carousel.Item>
//                </Carousel>    
//        </div>
//    </section>
//</Container>
  )
}

export default Carous