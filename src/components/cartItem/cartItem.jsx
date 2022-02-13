import { useContext } from 'react';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext';
import './cartItem.scss';



const CartItem = ( { product, remove } ) => {

    const { handleQuantityPlus, handleQuantityLess } = useContext(CartContext);




    return(
        <Container>
            <Row className="cartContainer">
                <Col className="cartImg" xs={12} md={5}>
                    <img src={product.item.img} alt="" />
                </Col>
                <Col className='cartText'xs={12} md={7}>
                    <p className="nameCart">{product.item.name}</p>
                    <p>Precio unitario: $ {product.item.price} </p>
                    <div className="cartCounter">
                        <button onClick={ () => handleQuantityLess(product.item.id)}> - </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => handleQuantityPlus(product.item.id)}> + </button>
                    </div>
                    <p className="subTotalCart">Sub-Total: ${product.quantity * product.item.price}</p>

                    <Button variant="danger" size="sm" onClick={ () => remove (product.item.id)}>Eliminar</Button>
                </Col>
            </Row>
        </Container>
        
    )
}
export default CartItem;