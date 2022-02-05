import { Container } from "react-bootstrap";
import CartList from "../components/cartList/cartList";
import ItemList2 from "../components/itemList/itemList2";


const ProductPage = () => {

    return (
        <Container>
                <div className="productPage">
                
                    <h1>Productos disponibles:</h1>
                    <ItemList2/>  

                    <div>
                        <CartList/>
                    </div>

                </div>
        </Container>
    )
}
export default ProductPage;