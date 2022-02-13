import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()

    return(
        <Container>
            <div className="notFoundContainer">
                <h1>Oops!! Estás perdido?</h1>
                <h2>Te ayudo a volver. Haz click aquí:</h2>
                <hr/>
                <button onClick={ () => navigate(`/`) }>Volver</button>
            </div>
        </Container>
    );

};

export default NotFoundPage;