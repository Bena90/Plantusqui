import './footer.scss';
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'
import footer from '../../assets/footer.png'
import {Container} from 'react-bootstrap';

const Footer = () => {
    const mensaje = '?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo'
    return (
        <footer className="main-footer">
            <img src={footer} className="w-100" alt="" />
            <div className="containerFooter">
                <Container>
                        <h5>Redes sociales</h5>
                        <div className="list-social-media d-flex justify-content-center" >
                            <a href="https://www.instagram.com/plantusqui/" target='_blank' rel='noreferrer'><img src={instagram} alt="mediaInstagram" /></a>
                            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><img src={facebook} alt="mediaFacebook" /></a>
                            <a href={`https://wa.me/541153834775${mensaje}`} target='_blank' rel='noreferrer'><img src={whatsapp} alt="mediaWhatsapp" /></a>
                    </div>
                </Container>
                <div className="py-2 register">
                        <p>
                            &copy;{new Date().getFullYear()} Plantusqui | All right reserve | Terms Of Service | Plantusqui by {'</BeCode>'}
                        </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;