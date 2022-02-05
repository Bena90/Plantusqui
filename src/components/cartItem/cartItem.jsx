import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext';
import './cartItem.scss';



const CartItem = ( { product } ) => {

    const { deleteProd } = useContext(CartContext);

    return(
            <div className="cartContainer">
                <div className='cartText'>
                    <p>Producto: {product. item.name} </p>
                    <p>Precio: {product.item.price} </p>
                    <p>Cantidad: {product.quantity}</p>
                    <Button variant="danger" size="sm" onClick={ () => deleteProd (product.item.id)}>X</Button>
                </div>
            </div>
    )
}
export default CartItem;