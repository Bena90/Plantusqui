import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemList2 from "../components/itemList/itemList2";

const ProductPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
                <div className="productPage">
                    <h1>Productos disponibles:</h1>
                    <ItemList2/>  
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant='success' className="mt-4" onClick={()=>navigate('/')}>Volver</Button>
                </div>
        </Container>
    );
};
export default ProductPage;