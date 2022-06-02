import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemList2 from "../components/itemList/itemList2";

const ProductPage = () => {
    const navigate = useNavigate();
    return (
        <Container className="productPageContainer">
                <div className="productPage">
                    <h2>Productos disponibles:</h2>
                    <ItemList2/>  
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success btn-back mt-4" onClick={()=>navigate('/')}>Volver</button>
                </div>
        </Container>
    );
};
export default ProductPage;