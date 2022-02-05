import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemDetailContainer from "../components/itemDetailContainer/itemDetailContainer";



const ProductDetailsPage = () => {

    const navigate = useNavigate ();

    return(
        <div className="productDetailsPagesContainer">
            <h1>Detalle de producto</h1>
            <ItemDetailContainer/>
            <div className="productDetailsPagesButton">
                <Button variant="success" onClick = { () => navigate ("/products") }>
                            Volver
                </Button>
            </div> 
        </div>       
    )
};
export default ProductDetailsPage;