import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            <h1>404 Error Not Found</h1>
            <Link to='/'> Volver </Link>
            <div>o</div>
            <button onClick={ () => navigate(`/`) }>Volver</button>
        </div>
    );

};

export default NotFoundPage;