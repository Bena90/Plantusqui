import './footer.scss';

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
                            <li>Empty</li>
                            <li>Empty</li>
                            <li>Empty</li>
                        </ul>
                    </div>
                    {/*column3*/}
                    <div className="col">
                        <h4>Redes sociales</h4>
                        <ul className="list-unstyled">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Whatsapp</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row">
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} Thic Memes Inc | All right reserve | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;