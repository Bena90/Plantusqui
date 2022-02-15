import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartList from "../components/cartList/cartList";
import { UserForm } from "../components/cartList/form";
import { CartContext } from "../context/cartContext";

const CartPage = () => {

    const {cart} = useContext(CartContext)
    return (
        <Container>
            <h1>Carrito:</h1>
            <Row>
                <Col>
                    <CartList/>
                </Col>                
                {cart.length !== 0 && 
                    <Col>
                        <UserForm/>
                    </Col>
                }
            </Row>
            </Container>
    );
};

export default CartPage;