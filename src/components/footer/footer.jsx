import './footer.scss';
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/facebook.png'

const Footer = () => {

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    {/*column1*/}
                    <div className="col">
                        {/*column2*/}
                        <h4>Contacto</h4>
                        <ul className="list-unlysted">
                            <li>15-5634-0008</li>
                            <li>Buenos Aires, Argentina</li>
                            <li>123 Av. Siempre Viva</li>
                        </ul>
                    </div>
                    {/*column2*/}
                    <div className="col">
                        <h4>Staff</h4>
                        <ul className="list-unstyled">
                            <li>Fede 🧑‍</li>
                            <li>Stefy 👩</li>
                        </ul>
                    </div>
                    {/*column3*/}
                    <div className="col">
                        <h4>Redes sociales</h4>
                        <div className="list-social-media">
                            <a href="https://www.facebook.com/"><img src={instagram}/></a>
                            <a href="https://www.instagram.com/"><img src={facebook}/></a>
                            <a href="https://www.instagram.com/"><img src={whatsapp}/></a>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} Thic Memes Inc | All right reserve | Terms Of Service | Plantusqui by Esteban Benabarre
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;