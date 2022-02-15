import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemDetailContainer from "../components/itemDetailContainer/itemDetailContainer";
import { CartContext } from "../context/cartContext";

const ProductDetailsPage = () => {
    const { setCounter } = useContext (CartContext);
    const navigate = useNavigate ();

    const comeBack = () => {
        setCounter (0)
        navigate ("/products");
    }
    return(
        <div className="productDetailsPagesContainer">
            <h1>Detalle de producto</h1>
            <ItemDetailContainer/>
            <div className="productDetailsPagesButton">
                <Button variant="success" onClick = {comeBack}>
                            Volver
                </Button>
            </div> 
        </div>       
    )
};
export default ProductDetailsPage;
